<script lang="ts">
	import { Text, Button } from '$lib/components';
	import { ChevronLeftIcon } from '$lib/icons';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.meta.title} - Chizi Victor</title>
	<meta name="description" content={data.meta.description} />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:type" content="article" />
</svelte:head>

<a href=".">
	<Button variant="outline" class="mb-5"><ChevronLeftIcon class="w-4 mr-2" /> Back</Button>
</a>

<article class="flex flex-col gap-10">
	<hgroup class="space-y-1">
		<Text variant="h1" class="flex items-center gap-2">
			{data.meta.title}
		</Text>
		<Text>{data.meta.description}</Text>
		<!-- <Text asLabel>{formatDate(new Date(data.meta.date), 'MMM DD, YYYY')}</Text> -->
	</hgroup>

	<div>
		<svelte:component this={data.content} />
	</div>
</article>
