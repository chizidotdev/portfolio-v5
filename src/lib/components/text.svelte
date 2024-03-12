<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	const textVariants = cva('', {
		variants: {
			variant: {
				h1: 'scroll-m-20 text-3xl tracking-tight lg:text-4xl',
				h2: 'scroll-m-20 text-lg tracking-tight first:mt-0',
				h3: 'scroll-m-20 text-lg tracking-tight',
				p: 'leading-6'
			},
			asLabel: {
				true: 'text-muted-foreground'
			}
		}
	});

	interface $$Props extends HTMLButtonAttributes, VariantProps<typeof textVariants> {
		asLabel?: boolean;
	}

	export let variant: $$Props['variant'] = 'p';
	export let asLabel: $$Props['asLabel'] = false;
</script>

{#if variant === 'h1'}
	<h1 class={textVariants({ variant, asLabel, class: $$props.class })}><slot /></h1>
{:else if variant === 'h2'}
	<h2 class={textVariants({ variant, asLabel, class: $$props.class })}><slot /></h2>
{:else if variant === 'h3'}
	<h3 class={textVariants({ variant, asLabel, class: $$props.class })}><slot /></h3>
{:else}
	<p class={textVariants({ variant, asLabel, class: $$props.class })}><slot /></p>
{/if}
