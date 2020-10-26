<script>
	import { onMount } from 'svelte';
	import Category from './Category.svelte';

	export let name;

	const now = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});

    let categories = [];

	onMount(async() => {
		var linksUrl = './links.json';
        fetch(linksUrl)
			.then(res => res.json())
			.then(data => {
			categories = data
		});
		console.log(`TRACER hello from oncreate v2`);
	});
</script>

<main>
	<h2>{name} ({now})</h2>
	{#each categories as category}
		<Category {category} />
	    <hr/>
	{/each}
	<h2>footer</h2>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h2 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>