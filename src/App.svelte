<script>

	import Category from './Category.svelte';

	export let name;

	const now = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});

	const categories = [
		{"name": "GitHub",
		 "links": [
			 {"name": "codetojoy repos", "url": "https://github.com/codetojoy?tab=repositories"},
			 {"name": "codetojoy gists", "url": "https://github.com/codetojoy?tab=repositories&q=gists&type=&language="},
			 {"name": "peidevs", "url": "https://www.github.com/peidevs"},
		]},
		{"name": "GitHub 2",
		 "links": [
			 {"name": "2 codetojoy repos", "url": "https://github.com/codetojoy?tab=repositories"},
			 {"name": "2 codetojoy gists", "url": "https://github.com/codetojoy?tab=repositories&q=gists&type=&language="},
			 {"name": "2 peidevs", "url": "https://www.github.com/peidevs"},
		]},
	];
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