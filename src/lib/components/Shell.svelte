<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/stores';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	let menuOpen = $state(false);

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/origin-story', label: 'Origin Story' },
		{ href: '/press-releases', label: 'Press Releases' },
	];

	function isActive(href: string): boolean {
		if (href === '/') {
			return $page.url.pathname === '/';
		}
		return $page.url.pathname.startsWith(href);
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && menuOpen) {
			closeMenu();
		}
	}

	function handleClickOutside(event: MouseEvent) {
		const nav = document.querySelector('nav');
		if (menuOpen && nav && !nav.contains(event.target as Node)) {
			closeMenu();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} onclick={handleClickOutside} />

{#if menuOpen}
	<button
		class="fixed inset-0 z-30"
		onclick={closeMenu}
		aria-label="Close menu"
		style="background: transparent;"
	></button>
{/if}

<nav>
	<div class="container">
		<a href="/" class="site-title">Abundant Nexus Conference in Honor of Dr. Janusz Bryzek</a>
		<button class="hamburger" onclick={toggleMenu} aria-label="Menu">
			<span class="hamburger-icon">☰</span>
			<span class="hamburger-label">Menu</span>
		</button>
		<ul class:show={menuOpen}>
			{#each navLinks as link}
				<li>
					<a
						href={link.href}
						class={isActive(link.href) ? 'active' : ''}
						onclick={closeMenu}
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<div class="container">
	<main>
		{@render children()}
	</main>
</div>

<footer>
	<div class="container">
		<p>&copy; 2025 Abundant Nexus. All rights reserved.</p>
	</div>
</footer>
