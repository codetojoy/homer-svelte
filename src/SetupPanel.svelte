<script>
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();	

	export let name;
	export let url;

	function addLinkClicked() {
		dispatch("addLink", {name, url});
	}
	function clearTempClicked() {
		dispatch("clearTemp");
	}	
</script>

<div>
	<label for="name">Name:</label>
	<input name="name" bind:value={name} />
	<br/>
	<label for="url">URL:</label>
	<input name="url" bind:value={url}  />
	<br/>
	<button on:click={addLinkClicked}>Add</button>
	<br/>
	<button on:click={clearTempClicked}>Clear Temp</button>
</div>

<style>
</style>