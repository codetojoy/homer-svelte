<script>
	import Link from './Link.svelte';

	export let category;
</script>

<section>
	<h3>{category.name}</h3>
	{#each category.links as link}
		<Link {link} />
		<br/>
	{/each}
</section>

<style>
</style>