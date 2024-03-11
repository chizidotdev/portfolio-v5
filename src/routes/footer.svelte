<script lang="ts">
	import { personalData } from '$lib/config';
	import { buttonStyles, Text } from '$lib/components';
	import { TwitterIcon, GithubIcon, LinkedinIcon, MailIcon } from '$lib/icons';
</script>

<footer class="flex flex-col items-center sm:items-start justify-between gap-10 mt-10">
	<div class="flex items-center gap-3">
		{#each personalData.socials as link}
			<a
				href={link.url}
				class={buttonStyles({ variant: 'outline', size: 'icon' })}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={link.id}
			>
				{#if link.id === 'twitter'}
					<TwitterIcon />
				{:else if link.id === 'github'}
					<GithubIcon />
				{:else if link.id === 'linkedin'}
					<LinkedinIcon class="p-0.5" />
				{:else if link.id === 'mail'}
					<MailIcon class="p-0.5" />
				{/if}
			</a>
		{/each}
	</div>

	<Text class="text-center sm:text-left">
		Developed by <span class="text-muted-foreground">@chizidotdev</span>. Built with
		<a
			href="https://kit.svelte.dev"
			class="text-muted-foreground underline-offset-4 underline"
			target="_blank"
			rel="noopener noreferrer"
		>
			SvelteKit
		</a>
		and
		<a
			href="https://tailwindcss.com/"
			class="text-muted-foreground underline-offset-4 underline"
			target="_blank"
			rel="noopener noreferrer"
		>
			TailwindCSS,
		</a>
		deployed on
		<a
			href="https://railway.app/"
			class="text-muted-foreground underline-offset-4 underline"
			target="_blank"
			rel="noopener noreferrer"
		>
			Railway
		</a>
	</Text>
</footer>
