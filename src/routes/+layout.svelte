<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/jetbrains-mono';
	import '@fontsource-variable/bricolage-grotesque';
	import Header from './header.svelte';
	import Footer from './footer.svelte';
	import { Analytics } from '$lib/components';
</script>

<Analytics />

<div
	class="bg-background w-full max-w-screen-md mx-auto py-10 px-5 md:px-12 min-h-dvh flex flex-col justify-between"
>
	<Header />

	<main class="flex-1 my-20">
		<slot />
	</main>

	<Footer />
</div>
