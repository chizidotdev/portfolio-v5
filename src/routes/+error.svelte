<script lang="ts">
	import { page } from '$app/stores';
	import { Button, Text } from '$lib/components';
</script>

<section class="py-20 space-y-2">
	<Text variant="h2">{$page.status}: Page {$page.error?.message ?? 'Not Found'}</Text>
	{#if $page.status === 404}
		<Text class="mb-6">
			The page you are looking for does not exist. Please check the URL and try again.
		</Text>
	{/if}

	<a href="/">
		<Button variant="link">Back to home</Button>
	</a>
</section>
