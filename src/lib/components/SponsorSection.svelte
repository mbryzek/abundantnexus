<script lang="ts">
	interface Sponsor {
		name: string;
		logo: string;
		link?: string;
	}

	interface Props {
		level: string;
		levelClass: string;
		sponsors: Sponsor[];
	}

	let { level, levelClass, sponsors }: Props = $props();
</script>

<div class="sponsor-level {levelClass}">
	<h5>{level}</h5>
	<div class="sponsor-grid">
		{#each sponsors as sponsor}
			{#if sponsor.link}
				<a href={sponsor.link} target="_blank" rel="noopener" class="sponsor-logo">
					<img src={sponsor.logo} alt={sponsor.name} />
				</a>
			{:else}
				<div class="sponsor-logo">
					<img src={sponsor.logo} alt={sponsor.name} />
				</div>
			{/if}
		{/each}
	</div>
</div>
