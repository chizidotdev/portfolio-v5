<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { cva, type VariantProps } from 'class-variance-authority';

	const button = cva(
		'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed',
		{
			variants: {
				variant: {
					default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
					destructive:
						'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
					outline:
						'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
					secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
					ghost: 'hover:bg-accent hover:text-accent-foreground',
					link: 'text-muted-foreground underline-offset-4 underline px-0',
					primary: [
						'hover:animate-shimmer border bg-[linear-gradient(110deg,#fff,35%,#ccc,50%,#fff)] bg-[length:200%_100%] transition-colors shadow-sm shadow-neutral-300',
						'text-secondary-foreground dark:bg-[linear-gradient(110deg,#121212,35%,#333,50%,#121212)] dark:shadow-neutral-950'
					]
				},
				size: {
					default: 'h-9 px-4 py-2',
					sm: 'h-8 rounded-md px-3 text-xs',
					lg: 'h-10 rounded-md px-8',
					icon: 'h-9 w-9'
				}
			}
		}
	);

	interface $$Props extends HTMLButtonAttributes, VariantProps<typeof button> {}

	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';
</script>

<button {...$$props} class={button({ variant, size, class: $$props.class })}>
	<slot />
</button>
