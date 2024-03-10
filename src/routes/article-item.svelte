<script lang="ts">
	import { cn } from '$lib/utils';
</script>

<article
	class={cn(
		'mt-1 flex items-center gap-4',
		'group py-4 md:px-4 md:hover:bg-muted rounded-lg transition-colors'
	)}
>
	<div class="flex-1"><slot /></div>

	<span class="group-hover:opacity-100 md:opacity-0 md:px-4 transition-opacity">
		<!-- <LinkIcon /> -->
	</span>
</article>
