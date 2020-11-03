<script>
    import {linear}  from 'svelte/easing';
    import {fade} from 'svelte/transition';

	import Link from './Link.svelte';

	export let category;

	const options = {duration: 800, easing: linear};
	// TODO: make `showMode` an exported prop 
	const showMode = true;
	let show = false;
</script>

<section>
	<h3 on:mouseenter={() => show = true }>{category.name}</h3>
	{#if (! showMode) || (showMode && show)}
		<div class="panel">
			{#each category.links as link}
				<div transition:fade={options}>
					<Link {link} />
					<br/>
				</div>
			{/each}
		</div>
	{/if}
</section>
