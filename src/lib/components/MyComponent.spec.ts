import { it } from 'vitest';
import { render } from 'svelte/server';
import MyComponent from '$lib/components/MyComponent.svelte';

it("should render correctly", async () => {
	render(MyComponent);
})