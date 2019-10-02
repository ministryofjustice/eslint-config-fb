# eslint-config-fb

The Form Builder ESLint configuration implements [Standard JS](https://standardjs.com/) and additional rules, outlined below.

## Installation

Install from NPM:

```
npm install @ministryofjustice/eslint-config-fb --save-dev
```

## Usage

Create an `.eslintrc` file in the root of your package:

```
{
  "extends": "@ministryofjustice/eslint-config-fb"
}
```

## Rules

* array-bracket-newline
* array-bracket-spacing
* no-extra-parens
* no-var
* object-curly-spacing
* prefer-template
* quote-props
* quotes
* template-curly-spacing

### array-bracket-newline

[Enforces line breaks after opening and before closing array brackets](https://eslint.org/docs/rules/array-bracket-newline)

### array-bracket-spacing

[Enforces consistent spacing inside array brackets](https://eslint.org/docs/rules/array-bracket-spacing)

### no-extra-parens

[Ignores extra parentheses](https://eslint.org/docs/rules/no-extra-parens) (according to conditions)

### no-var

[Discourages the use of `var` and encourages the use of `const` or `let`](https://eslint.org/docs/rules/no-var)

### object-curly-spacing

[Enforces consistent spacing inside braces of object literals, destructuring assignments, and `import`/`export` specifiers](https://eslint.org/docs/rules/object-curly-spacing)

### prefer-template

[Flags usage of `+` operators with strings](https://eslint.org/docs/rules/prefer-template)

### quote-props

[Requires quotes around object literal property names](https://eslint.org/docs/rules/quote-props)

### quotes

[Enforces the consistent use of either backticks, double, or single quotes](https://eslint.org/docs/rules/quotes)

### template-curly-spacing

[Maintains consistency around the spacing inside of template literal](https://eslint.org/docs/rules/template-curly-spacing)