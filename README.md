# Metarhia Documentation

[Documentation for Metarhia technology stack](https://github.com/metarhia/).

## Building the Website Locally

Fork and clone the repository and run `npm install`.

You can now run

```sh:no-line-numbers
npm run docs:dev
```

to view the documentation in your browser.

## Checking Correct Formatting of Docs

In addition to the [VS Code extension](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint/) that lint Markdown while writing markup, the [`markdownlint-cli2`](https://github.com/DavidAnson/markdownlint-cli2/) is used to check Markdown formatting during CI/CD and [ESLint](https://eslint.org/) with the [`airbnb`](https://github.com/airbnb/javascript/) configuration for JavaScript code.

```sh:no-line-numbers
# Checks if all files are formatted correctly
npm run docs:lint

# Automatically formats all files directly
npm run docs:fmt
```
