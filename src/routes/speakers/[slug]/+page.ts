import { speakers } from '$lib/data/speakers';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const speaker = speakers.find((s) => s.slug === params.slug);
	if (!speaker) {
		throw error(404, 'Speaker not found');
	}
	return { speaker };
}

export function entries() {
	return speakers.map((speaker) => ({
		slug: speaker.slug,
	}));
}
