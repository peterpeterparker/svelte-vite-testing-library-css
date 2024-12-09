# Issue

Sample repo to showcase test issue with Svelte v5, vite and testing-library:

> FAIL  src/lib/components/MyComponent.spec.ts [ src/lib/components/MyComponent.spec.ts ]
> TypeError: Error while preprocessing /Users/daviddalbusco/projects/lab/svelte-vite-testing-library-css/src/lib/components/MyComponent.svelte - Cannot create proxy with a non-object as target or handler
> ❯ new PartialEnvironment node_modules/vite/dist/node/chunks/dep-yUJfKD1i.js:16766:19
> ❯ preprocessCSS node_modules/vite/dist/node/chunks/dep-yUJfKD1i.js:48447:23
> ❯ node_modules/@sveltejs/vite-plugin-svelte/src/preprocess.js:114:10
> ❯ style node_modules/@sveltejs/vite-plugin-svelte/src/preprocess.js:77:37
> ❯ process_single_tag node_modules/svelte/src/compiler/preprocess/index.js:283:21
> ❯ replace_in_code node_modules/svelte/src/compiler/preprocess/replace_in_code.js:70:23
> ❯ process_tag node_modules/svelte/src/compiler/preprocess/index.js:300:26
> ❯ Module.preprocess node_modules/svelte/src/compiler/preprocess/index.js:363:25
> ❯ compileSvelte node_modules/@sveltejs/vite-plugin-svelte/src/utils/compile.js:85:20

Reproduction:

```bash
git clone https://github.com/peterpeterparker/svelte-vite-testing-library-css
cd svelte-vite-testing-library-css
npm ci
npm run test
```

## Links

- https://github.com/testing-library/svelte-testing-library/issues/284#issuecomment-2527136854
- https://stackoverflow.com/questions/79263567/unit-test-when-there-is-style-on-the-component