<script lang="ts">
	import { Text, ArticleItem, Badge } from '$lib/components';
	import type { PageData } from './$types';

	export let data: PageData;
	$: snippets = data.snippets;
	let description =
		"A collection of code snippets I've developed/stolen over time and tend to use often. Ranging from random utililty hooks to environment setup instructions.";
</script>

<svelte:head>
	<title>Snippets - Chizi Victor</title>
	<meta name="title" content="Snippets - Chizi Victor" />
	<meta name="description" content={description} />
</svelte:head>

{#if snippets?.length}
	<section>
		<Text variant="h1" class="flex items-center gap-2">
			Snippets <Badge>Beta</Badge>
		</Text>
		<Text>{description}</Text>

		<div class="grid sm:grid-cols-2 gap-3 mt-10">
			{#each snippets as snippet}
				<a href={`/snippets/${snippet.slug}`}>
					<ArticleItem variant="compact" showLink={false}>
						<Text variant="h4">{snippet.title}</Text>
						<Text asLabel>{snippet.description}</Text>
					</ArticleItem>
				</a>
			{/each}
		</div>
	</section>
{/if}
