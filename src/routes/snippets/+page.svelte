<script lang="ts">
	import { Text, ArticleItem, Badge } from '$lib/components';
	import type { PageData } from './$types';

	export let data: PageData;
	$: snippets = data.snippets;
</script>

{#if snippets?.length}
	<section class="py-20">
		<Text variant="h1" class="flex items-center gap-2">
			Snippets <Badge>Beta</Badge>
		</Text>
		<Text>
			These are a collection of code snippets I've developed/stolen over time and tend to use often.
			Ranging from random utililty hooks to environment setup instructions.
		</Text>

		<div class="grid sm:grid-cols-2 gap-3 mt-10">
			{#each snippets as snippet}
				<ArticleItem variant="compact" showLink={false}>
					<div>
						<Text variant="h4">{snippet.title}</Text>
						<Text asLabel>{snippet.description}</Text>
					</div>
				</ArticleItem>
			{/each}
		</div>
	</section>
{/if}
