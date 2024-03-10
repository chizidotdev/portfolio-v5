<script lang="ts">
	import { Button, Text, ArticleItem, Badge } from '$lib/components';

	export let snippets;
</script>

{#if snippets?.length}
	<section class="">
		<Text variant="h4" class="flex items-center gap-2">
			Snippets <Badge>Beta</Badge>
		</Text>

		{#each snippets as snippet}
			<ArticleItem>
				<div class="flex items-center gap-4">
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

		<div class="mt-6 text-center md:text-left">
			<Button disabled variant="secondary">View more</Button>
		</div>
	</section>
{/if}
