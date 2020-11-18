<script>
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	let name;
	let url;

	function addLinkClicked() {
		dispatch("addLink", {name, url});
	}
	function clearTempClicked() {
		dispatch("clearTemp");
	}
	function showModeClicked() {
        const showMode = document.querySelector('#show-mode').checked; 
        console.log(`TRACER showMode: ${showMode}`);
		// dispatch("showMode", {showMode});
	}
</script>

<div>
	<label for="name">Name:</label>
	<input name="name" bind:value={name} data-testid="add-link-name"/>
	<br/>
	<label for="url">URL:</label>
	<input name="url" bind:value={url} data-testid="add-link-url"/>
	<br/>
	<button on:click={addLinkClicked} data-testid="add-temp-link">Add</button>
	<br/>
	<button on:click={clearTempClicked} data-testid="clear-temp-links">Clear Temp</button>
	<br/>
	<label for="show-mode">Show:</label>
    <input on:click={showModeClicked} id="show-mode" type="checkbox"/>
</div>

<style>
</style>
