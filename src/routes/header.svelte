<script lang="ts">
	import { personalData } from '$lib/config';
	import { Button, Text } from '$lib/components';
	import { TwitterIcon, GithubIcon } from '$lib/icons';
</script>

<header class="flex items-center justify-between">
	<div class="flex items-center gap-3">
		<a href="/">
			<img
				src="https://avatars.githubusercontent.com/u/92993973"
				class="w-12 h-12 rounded-full"
				alt="Profile avatar"
			/></a
		>
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
							<GithubIcon />
						{/if}
					</Button>
				{/if}
			</a>
		{/each}
	</div>
</header>
