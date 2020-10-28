<script>
	export let name;
	export let link;
</script>

<div>
	<label>Name:</label>
	<input bind:value={name} />
	<br/>
	<label>URL:</label>
	<input bind:value={link}  />
	<br/>
	<button>Add</button>
</div>

<style>
</style>