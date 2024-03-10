<script lang="ts">
	import { personalData as data } from '$lib/config';
	import { Button, Text, ArticleItem, Badge } from '$lib/components';
</script>

<section class="my-16 md:my-24 space-y-14 md:space-y-20">
	<section class="space-y-4">
		<div class="flex flex-col capitalize">
			<Text variant="h1">{data.headline.top}</Text>
			<Text asLabel variant="h1">
				{data.headline.bottom}
			</Text>
		</div>

		<Text>{data.summary}</Text>

		<Button variant="primary">Contact me</Button>
	</section>

	<!-- {/* <Show when={snippets()}> */} -->
	<!-- {/*   <SnippetsPreviewList snippets={snippets()} /> */} -->
	<!-- {/* </Show> */} -->

	<section>
		<Text variant="h4">Projects</Text>
		{#each data.projects as project}
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
