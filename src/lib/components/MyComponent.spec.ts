import { it } from 'vitest';
import MyComponent from '$lib/components/MyComponent.svelte';
import { render } from '@testing-library/svelte';
import { mount } from 'svelte';

it('should render correctly with Svelte', async () => {
	mount(MyComponent, {
		target: document.body
	});
});

// Note: Same issue with Testing library
// it('should render correctly with testing library', async () => {
// 	render(MyComponent);
// });
