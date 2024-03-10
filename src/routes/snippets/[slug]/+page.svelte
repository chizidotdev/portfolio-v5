<script lang="ts">
	import { Text, ArticleItem, Badge, Button } from '$lib/components';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.meta.title} - Chizi Victor</title>
	<meta name="description" content={data.meta.description} />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:type" content="article" />
</svelte:head>

<a href="/snippets">
	<Button variant="outline" class="mb-5"><ChevronLeft class="w-4 mr-2 mb-0.5" /> Back</Button>
</a>

<article class="flex flex-col gap-10">
	<hgroup>
		<Text variant="h1" class="flex items-center gap-2">
			{data.meta.title}
		</Text>
		<Text>{data.meta.description}</Text>
	</hgroup>

	<div>
		<svelte:component this={data.content} />
	</div>
</article>
