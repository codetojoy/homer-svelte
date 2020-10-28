<script>
	import SetupPanel from './SetupPanel.svelte';
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();	
</script>

<div>
<!-- TODO: is there a way to bubble-up events ? or something better? -->
<SetupPanel
	on:addLink={(event) => dispatch("addLink", event.detail)}
	on:clearTemp={() => dispatch("clearTemp")}
/>
</div>

<style>
</style>