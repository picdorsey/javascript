# eslint-config-picdorsey-base

This package provides Airbnb's base JS .eslintrc as an extensible shared config.

## Usage

We export two ESLint configurations for your usage.

### eslint-config-picdorsey-base

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-picdorsey-base@latest" peerDependencies
  ```

  Linux/OSX users can simply run
  ```sh
  (
    export PKG=eslint-config-picdorsey-base;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
    npm install --save-dev eslint-config-picdorsey-base eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

  Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev eslint-config-picdorsey-base
  ```

  The cli will produce and run a command like:

  ```sh
  npm install --save-dev eslint-config-picdorsey-base eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

2. Add `"extends": "picdorsey-base"` to your .eslintrc

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
