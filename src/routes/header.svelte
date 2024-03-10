<script lang="ts">
	import { personalData } from '$lib/config';
	import Text from './text.svelte';
	import Button from './button.svelte';
	import TwitterIcon from './twitter-icon.svelte';
	import GithubIcon from 'lucide-svelte/icons/github';
</script>

<header class="flex items-center justify-between">
	<div class="flex items-center gap-3">
		<img
			src="https://avatars.githubusercontent.com/u/92993973"
			class="w-12 h-12 rounded-full"
			alt="Profile avatar"
		/>
		<div>
			<Text variant="h4">Chizi Victor</Text>
			<Text asLabel>Software Engineer</Text>
		</div>
	</div>

	<div class="flex items-center gap-3">
		{#each personalData.socials as link}
			<a href={link.url} class="flex items-center" target="_blank" rel="noopener noreferrer">
				{#if link.id !== 'linkedin'}
					<Button variant="outline" size="icon">
						{#if link.id === 'twitter'}
							<TwitterIcon />
						{:else if link.id === 'github'}
							<GithubIcon class="p-0.5" />
						{/if}
					</Button>
				{/if}
			</a>
		{/each}
	</div>
</header>
