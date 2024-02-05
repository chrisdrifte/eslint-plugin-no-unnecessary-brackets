/**
 * @fileoverview Tests for the no-unnecessary-brackets custom ESLint rule.
 */

const rule = require("../../../lib/rules/no-unnecessary-brackets");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2023, // or the appropriate ECMAScript version
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
});

ruleTester.run("no-unnecessary-brackets", rule, {
  valid: [
    // Valid examples without unnecessary brackets
    { code: '<div className="example">Hello</div>' },
    { code: "<div className={`example-${variable}`}>Hello</div>" },
    { code: "<div>{5}</div>" },
    { code: "<div>{variable}</div>" },
    { code: "<div>string</div>" },
  ],

  invalid: [
    // Invalid examples with unnecessary brackets (expecting a warning)
    {
      code: '<div className={"example"}>Hello</div>',
      errors: [{ messageId: "unnecessaryBrackets" }],
    },
    {
      code: '<div>{"string"}</div>',
      errors: [{ messageId: "unnecessaryBrackets" }],
    },
  ],
});
