import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite'

// Svelte test doc: https://svelte.dev/docs/svelte/testing

export default defineConfig({
	plugins: [sveltekit() as never, svelteTesting() as never],

	resolve: process.env.VITEST
		? {
				conditions: ['browser']
			}
		: undefined,

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		environment: 'jsdom'
	}
});
