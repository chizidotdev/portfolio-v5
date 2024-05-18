<script lang="ts">
	import { cn } from '$lib/utils';
	import LinkIcon from 'lucide-svelte/icons/link';

	export let variant: 'default' | 'compact' = 'default';
	export let showLink = true;
</script>

<article
	class={cn(
		'flex h-full items-center gap-4',
		'group rounded-lg py-4 transition-colors',
		variant === 'compact' && 'border bg-gradient-to-br from-muted px-4'
	)}
>
	<div class="h-full flex-1"><slot /></div>

	{#if showLink}
		<span class="transition-opacity group-hover:opacity-100 md:px-4 md:opacity-0">
			<LinkIcon class="text-muted-foreground" />
		</span>
	{/if}
</article>
