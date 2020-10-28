<script>
	import categories from './stores/categories';
	import ControlPanel from './ControlPanel.svelte';
	import Category from './Category.svelte';

	export let name;

	const now = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
</script>

<div>
    <section class="controls">
		<ControlPanel
			on:addLink={(event) => categories.addLink(event.detail)}
			on:clearTemp={() => categories.clearTemp()}
		/>
	</section>
	<section class="primary">
		<h2>{name} ({now})</h2>
		{#each $categories as category}
			<Category {category} />
			<hr/>
		{/each}
	    <h2>footer</h2>
	</section>
</div>

<style>
	.primary {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h2 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}

	div {
	  display: flex;
	  flex-direction: row;
	}
  
	.controls {
	  flex-grow: 0;
	  flex-shrink: 0;
	  flex-direction: column;
	  width: 20%;
	}
</style>
  