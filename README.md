# eslint-config-powpeg

A shareable ESLint configuration for JavaScript projects, including support for CommonJS, ES Modules, and Mocha environments.

## Installation

```sh
npm install --save-dev eslint eslint-config-powpeg
```

## Usage

In your project's ESLint config (e.g., `.eslintrc.js` or `eslint.config.js`):

```js
// eslint.config.js
const powpeg = require("eslint-config-powpeg");

module.exports = powpeg;
```

Or, if using the legacy config format:

```js
module.exports = {
  extends: ["powpeg"],
};
```

## Features

- Ignores common folders: `node_modules`, `dist`, `coverage`
- Supports `.js`, `.cjs`, and `.mjs` files
- Sets up environments for Node.js, ES2021, and Mocha
- Warns on `console` usage
- Uses ESLint's recommended rules

## Customization

You can override or extend any rules in your own config as needed.
