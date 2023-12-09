# NenUI Contributing Guide 🚀

Hey there👋🏽 Glad that you are interested in contributing to NenUI. Before submitting your contribution, please make sure to take a moment and read through the following guide:

## Development ⚙️

### Project Setup

We use a monorepo for nen-ui. This helps for rapid implementation and documentation.
For starters, clone this repo to your local machine and install the dependencies.

```bash
pnpm install
```

We use VitePress for documenting. You can start it locally by running

```bash
pnpm docs:dev
```

## Contributing 🫱🏼‍🫲🏾

### Existing components

Feel free to enhance the existing components and their functionalities. Please try not to introduce breaking changes. Also, exclude any form of styling as we aim to make the components as flexible as possible.

### New components

There are some notes for adding new components:

- Before you start working, it's better to open an issue to discuss first.
- Create a new branch for your implementations using conventional guide `e.g feat/new-component or fix/existing-component`.
- Commits should also be [conventional](https://www.conventionalcommits.org/en/v1.0.0/).
- The implementation should be placed under `packages/nen-ui/src/components` as a folder and exposing in `packages/nen-ui/src/lib/index.ts`
- In the `nen-ui` package, try not to introduce 3rd-party dependencies as this package is aimed to be as lightweight as possible.
- If you'd like to introduce 3rd-party dependencies, please state reasons in the issue you should have created and it'll be discussed.
- You can find the component template under `packages/nen-ui/_template/`, details explained in the [Component Folder](#component-folder) section.
- Commit and submit as a PR to `pre-release` branch.

> Please note you should update `packages/nen-ui/src/lib/index.ts` as it's not auto-generated at the moment. Also, tests should be written for components and documentation.

## Project Structure 📦

### Monorepo

We use monorepo for multiple packages

```
packages
  documentation/    - documentation across all packages
  nen-ui/           - core nen-ui package
```

### Component Folder

A component folder typically contains these 4 files:

> You can find the template under `packages/nen-ui/_template/`

```bash
index.ts            # function source code itself
demo.vue            # documentation demo
index.test.ts       # vitest unit testing
index.md            # documentation
```

for `index.ts` you should export the function with names.

```ts
// DO
export { useMyFunction };

// DON'T
export default useMyFunction;
```

for `index.md` the first sentence will be displayed as the short intro in the function list, so try to keep it brief and clear.

```md
# useMyFunction

This will be the intro. The detail descriptions...
```

### Project structure enhancement

Feel free to enhance the current project structure. If you feel there are better ways to handle some things that are being done on this package, feel free to contribute. Guidelines for contribution follows most of the same convention as mentioned under [new components](#new-components).

## Code Style 🧑🏽‍💻

Don't worry about the code style as long as you install the dev dependencies. Git hooks will format and fix them for you on committing.

## Thanks

Thank you again for being interested in NenUI! Happy Coding! 🎉
