<script>
	// import jq from 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.6.3/jquery.min.js';
	// import jq from 'jquery';
	// import jqui from 'jqueryui';

	export let link;

	/*
	jq(function() {
		// $( "#accordion" ).accordion({ autoHeight : false, clearStyle : true, event: "click hoverintent"});
		jqui(".link" ).button();
	});
	*/
</script>

<!--
<a href="{link.url}" class="link">{link.name}</a>
-->
<button onclick="location.href='{link.url}'" type="button">{link.name}</button>

<style>
</style>