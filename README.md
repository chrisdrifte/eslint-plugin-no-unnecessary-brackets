# eslint-plugin-no-unnecessary-brackets

Warns when string literals are supplied inside curly brackets in jsx.

eg.

```js
<div className={"example"}>Hello</div>
```

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-unnecessary-brackets`:

```sh
npm install eslint-plugin-no-unnecessary-brackets --save-dev
```

## Usage

Add `no-unnecessary-brackets` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["no-unnecessary-brackets"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "no-unnecessary-brackets/no-unnecessary-brackets": 1
  }
}
```

## Rules

<!-- begin auto-generated rules list -->

| Name                                                                                                                                            | Description                                                          |
| :---------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------- |
| [no-unnecessary-brackets](https://github.com/chrisdrifte/eslint-plugin-no-unnecessary-brackets/blob/main/docs/rules/no-unnecessary-brackets.md) | Warns when string literals are supplied inside curly brackets in jsx |

<!-- end auto-generated rules list -->
