<script lang="ts">
	import { page } from '$app/stores';
	import { Button, Text } from '$lib/components';
	import { onMount } from 'svelte';

	$: networkStatus = '';

	onMount(() => {
		networkStatus = window.navigator.onLine ? 'online' : 'offline';
		window.addEventListener('online', () => (networkStatus = 'online'));
		window.addEventListener('offline', () => (networkStatus = 'offline'));
	});
</script>

<section class="py-20">
	{#if !!networkStatus}
		<Text variant="h2">Network Error</Text>
		<Text>You are currently offline. Please check your internet connection and try again.</Text>
	{:else}
		<Text variant="h2">{$page.status}: Page {$page.error?.message ?? 'Not Found'}</Text>
		{#if $page.status === 404}
			<Text>The page you are looking for does not exist. Please check the URL and try again.</Text>
		{/if}
	{/if}

	<div class="mt-6 w-fit flex justify-start gap-4">
		<a href="/">
			<Button variant="outline">Back to home</Button>
		</a>
		<Button variant="secondary" on:click={() => window.location.reload()}>Reload</Button>
	</div>
</section>
