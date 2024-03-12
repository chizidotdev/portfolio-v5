<script lang="ts">
	import { Button, Text, ArticleItem, Badge } from '$lib/components';

	export let snippets;
</script>

{#if snippets?.length}
	<section class="">
		<Text variant="h4" class="flex items-center gap-2">
			Snippets <Badge>New</Badge>
		</Text>

		<div class="flex flex-col gap-2 mt-4">
			{#each snippets as snippet}
				<a href={`/snippets/${snippet.slug}`}>
					<ArticleItem variant="compact">
						<Text variant="h4">{snippet.title}</Text>
						<Text asLabel>{snippet.description}</Text>
					</ArticleItem>
				</a>
			{/each}
		</div>

		<div class="mt-6 text-center md:text-left">
			<a href="/snippets"> <Button variant="secondary">View more</Button></a>
		</div>
	</section>
{/if}
