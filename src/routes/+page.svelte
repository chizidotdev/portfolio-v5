<script lang="ts">
	import { personalData } from '$lib/config';
	import { SnippetsPreview, Button, Text, ArticleItem, Badge } from '$lib/components';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="my-16 md:my-24 space-y-14 md:space-y-20">
	<section class="space-y-4">
		<div class="flex flex-col capitalize">
			<Text variant="h1">{personalData.headline.top}</Text>
			<Text asLabel variant="h1">
				{personalData.headline.bottom}
			</Text>
		</div>

		<Text>{personalData.summary}</Text>

		<Button variant="primary">Contact me</Button>
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
