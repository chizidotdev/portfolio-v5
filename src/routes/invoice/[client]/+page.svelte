<script lang="ts">
	import { Text, Accordion, Button } from '$lib/components';
	import DownloadIcon from 'lucide-svelte/icons/download';
	import { formatCurrency } from '$lib/utils';
	import Item from './item.svelte';
	import { info, items } from './data';

	let totalAmount = formatCurrency(1500000);
</script>

<div class="flex flex-col gap-10">
	<section class="space-y-3">
		<Text variant="h1">Ecommerce StoreFront</Text>
		<Text>
			Savy has grown as a wine brewery and needs to enhance its online presence to this growth. The
			company has decided to launch an online store to sell its products.
			<!-- The store will have a catalog of products, a shopping cart, and a checkout process. The store will also have a user -->
			<!-- profile section where users can view their order history and manage their account. -->
		</Text>
	</section>

	<section class="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-4">
		{#each info as { label, values }}
			<div>
				<Text variant="h2">{label}</Text>
				{#each values as value}
					<Text asLabel>{value}</Text>
				{/each}
			</div>
		{/each}
	</section>

	<section class="space-y-3 border-b">
		{#each items as item}
			<Item {item} />
		{/each}

		<div class="flex justify-between items-center py-6">
			<Text asLabel>Total in NGN:</Text>
			<Text variant="h2">{totalAmount}</Text>
		</div>
	</section>

	<section class="space-y-3">
		<Text variant="h2">Conditions</Text>

		<Accordion.Root>
			<Accordion.Item value="item-1">
				<Accordion.Trigger>Scope changes</Accordion.Trigger>
				<Accordion.Content>
					Any changes to the scope of the project will impact the timeline and budget. We will
					provide a new quote for any additional work.
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-2">
				<Accordion.Trigger>Image licenses</Accordion.Trigger>
				<Accordion.Content>
					Image, video and any other media licenses are not included in the quote. At launch, we
					will provide a list of all media used on the website (if any) and their licenses. This
					simply means that you are responsible for the licenses of any media you provide.
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-3">
				<Accordion.Trigger>Payments?</Accordion.Trigger>
				<Accordion.Content>
					We require a 50% deposit before we start the project. The remaining 50% is due upon
					completion of the project. We accept bank transfers and credit card payments.
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</section>

	<section class="space-y-3">
		<Text variant="h2">Invoice</Text>
		<Button>Download PDF&nbsp;&nbsp;<DownloadIcon class="w-4 stroke-primary-foreground" /></Button>
	</section>

	<section
		class="flex justify-between items-center gap-3 pt-6 sticky bottom-0 bg-background border-t -mx-2 px-2"
	>
		<a
			href="https%3A%2F%2Fwa.me%2F%2B2349037390992%3Ftext%3DI%20would%20like%20to%20know%3A%20%5Cn%5Cn"
			target="_blank"
			rel="noopener noreferrer"
			class="w-full"
		>
			<Button size="lg" class="w-full" variant="secondary">Ask a question</Button>
		</a>
		<Button size="lg" class="w-full" variant="primary">Pay now - {totalAmount}</Button>
	</section>
</div>
