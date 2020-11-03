<script>
    import { linear } from 'svelte/easing';
    import {blur, fade, fly, scale, slide} from 'svelte/transition';

	import Link from './Link.svelte';

	export let category;

	function mouseHandler() {
	    this.classList.toggle("active");
		const panel = this.nextElementSibling;
		const newValue = (panel.style.display === "block") ? "none" : "block"; 
		panel.style.display = newValue;
		/*
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
		*/
	}

	function addListeners(item, index) {
		// item.addEventListener("mouseover", mouseHandler);
		// the UI gets even more weird when we close on 'mouseleave'
		// item.addEventListener("mouseleave", mouseHandler);
	}

	const accElements = document.getElementsByClassName("accordion");

	[...accElements].forEach(addListeners);

    const options = {duration: 1000, easing: linear};
</script>

<section>
	<h3 class="accordion">{category.name}</h3>
	<div class="panel">
		{#each category.links as link}
            <div in:fly={{...options, opacity: 1, x: -400}}
                 out:fly={{...options, opacity: 1, x: 500}}
            >
                <Link {link} />
                <br/>
            </div>
		{/each}
	</div>
</section>

<style>
/* 
- this whole part is pretty dicey 
- UX people will freak out
- TODO: find a more Svelte-y way to do this 
*/

/*
.accordion {
  cursor: pointer;
  transition: 0.4s;
}

.active {
  background-color: wheat;
}

.panel {
  display: none;
}
*/
</style>
