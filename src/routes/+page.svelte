<script lang="ts">
	import { personalData } from '$lib/config';
	import { SnippetsPreview, Button, Text, ArticleItem, Badge } from '$lib/components';
	import { MailIcon } from '$lib/icons';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="space-y-14 md:space-y-20">
	<section class="flex flex-col gap-4">
		<div class="flex flex-col capitalize">
			<Text variant="h1">{personalData.headline.top}</Text>
			<Text asLabel variant="h1">
				{personalData.headline.bottom}
			</Text>
		</div>

		<Text>{personalData.summary}</Text>

		<a href="mailto:chiziwokoma@gmail.com" class="mt-2">
			<Button variant="primary"><MailIcon class="w-4 mr-2" /> Contact me</Button>
		</a>
	</section>

	<SnippetsPreview snippets={data.snippets} />

	<section>
		<Text variant="h4">Projects</Text>
		{#each personalData.projects as project}
			<a href={project.link} target="_blank" rel="noopener noreferrer">
				<ArticleItem>
					<Text variant="h4" class="flex items-center gap-2">
						{project.title}
						{#if project.pending}
							<Badge variant="secondary">In progress</Badge>
						{/if}
					</Text>
					<Text asLabel class="mt-1">
						{project.summary}
					</Text>
				</ArticleItem>
			</a>
		{/each}
	</section>
</section>
