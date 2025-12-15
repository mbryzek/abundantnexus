<script lang="ts">
	import Shell from '$lib/components/Shell.svelte';
	let { data } = $props();
</script>

<Shell>
	<h1>{data.speaker.presentationTitle}</h1>
	<p class="text-xl text-gray-700 mb-6">
		<strong>{data.speaker.name}</strong><br />
		<span class="text-lg">{data.speaker.title}</span>
	</p>

	<div style="overflow: auto;">
		<img
			style="width:35%; height:auto; float:left; margin:0 1.5rem 1rem 0;"
			src={data.speaker.photo}
			alt={data.speaker.name}
			srcset="{data.speaker.photo} 300w"
			sizes="(max-width: 300px) 100vw, 300px"
		/>

		{#each data.speaker.abstract as paragraph}
			<p>{paragraph}</p>
		{/each}
	</div>
</Shell>
