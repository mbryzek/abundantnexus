<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="apple-touch-icon" href={favicon} />
	<link rel="apple-touch-icon-precomposed" href={favicon} />
</svelte:head>

{@render children()}
