<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/jetbrains-mono';
	import '@fontsource-variable/bricolage-grotesque';
	import Header from './header.svelte';
	import Footer from './footer.svelte';
	import { onMount } from 'svelte';

	async function detectSWUpdate() {
		const registration = await navigator.serviceWorker.ready;

		registration.addEventListener('updatefound', () => {
			const newWorker = registration.installing;

			newWorker?.addEventListener('statechange', () => {
				if (newWorker.state === 'installed') {
					newWorker.postMessage({ type: 'SKIP_WAITING' });
					window.location.reload();
				}
			});
		});
	}

	onMount(() => {
		detectSWUpdate;
	});
</script>

<div
	class="bg-background w-full max-w-screen-md mx-auto py-10 px-5 md:px-12 min-h-dvh flex flex-col justify-between"
>
	<Header />

	<main class="flex-1 my-20">
		<slot />
	</main>

	<Footer />
</div>
