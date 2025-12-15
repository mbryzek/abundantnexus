<script lang="ts">
	interface Props {
		photo: string;
		name: string;
		title: string;
		abstractLink?: string;
	}

	let { photo, name, title, abstractLink }: Props = $props();
</script>

<div class="speaker-card">
	<div class="speaker-photo">
		<img src={photo} alt={name} />
	</div>
	<div class="speaker-info">
		<h4>{name}</h4>
		<p class="speaker-title">{title}</p>
		{#if abstractLink}
			<a href={abstractLink}>View Abstract</a>
		{/if}
	</div>
</div>
