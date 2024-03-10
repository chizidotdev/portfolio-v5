<script lang="ts">
	import { cn } from '$lib/utils';
	import LinkIcon from 'lucide-svelte/icons/link';

	export let variant: 'default' | 'compact' = 'default';
	export let showLink = true;
</script>

<article
	class={cn(
		'flex items-center gap-4',
		'group py-4 rounded-lg transition-colors',
		variant === 'compact' && 'px-4 bg-gradient-to-br from-muted border border-muted'
	)}
>
	<div class="h-full flex-1"><slot /></div>

	{#if showLink}
		<span class="group-hover:opacity-100 md:opacity-0 md:px-4 transition-opacity">
			<LinkIcon class="text-muted-foreground" />
		</span>
	{/if}
</article>
