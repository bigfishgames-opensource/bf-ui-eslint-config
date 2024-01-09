# eslint-config-bfg

This package provides the Engineering tools .eslintrc as an extensible shared config.

## Usage

We export one default ESLint configurations for your usage. In the future we may create an additional spec for integrating tools with React.

### eslint-config-bfg

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

Install the correct versions of each package, which are listed by the command:

```
npm install-peerdeps --dev eslint-config-airbnb-base
```

Add `"extends": "bfg"` to your .eslintrc.

## Improving this config

Add test cases for any rule changes. You can run tests with `npm test`. You can make sure this module lints with itself using `npm run lint`.
