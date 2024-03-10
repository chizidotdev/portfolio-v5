<script lang="ts">
	import { Button, Text, ArticleItem, Badge } from '$lib/components';
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
			Some are Serverless Functions, which include set up instructions. Others are anything from
			random CSS snippets to Node.js scripts.
		</Text>

		<div class="grid sm:grid-cols-2 gap-3 mt-10">
			{#each snippets as snippet}
				<ArticleItem variant="compact" showLink={false}>
					<div class="h-full flex items-center gap-4">
						<!-- <img -->
						<!--   src={urlForImage(snippet.icon).url()} -->
						<!--   alt={snippet.title} -->
						<!--   class="rounded-full object-cover w-10 h-10 opacity-85" -->
						<!-- /> -->
						<div>
							<Text variant="h4">{snippet.title}</Text>
							<Text asLabel>{snippet.description}</Text>
						</div>
					</div>
				</ArticleItem>
			{/each}
		</div>

		<div class="mt-6 text-center md:text-left">
			<Button disabled variant="secondary">View more</Button>
		</div>
	</section>
{/if}
