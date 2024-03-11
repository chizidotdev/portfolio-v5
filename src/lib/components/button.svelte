<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { type VariantProps } from 'class-variance-authority';
	import { buttonStyles } from './button';

	interface $$Props extends HTMLButtonAttributes, VariantProps<typeof buttonStyles> {}

	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';
</script>

<button {...$$props} class={buttonStyles({ variant, size, class: $$props.class })}>
	<slot />
</button>
