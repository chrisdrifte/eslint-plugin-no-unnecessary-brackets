/**
 * @fileoverview Tests for the no-unnecessary-brackets custom ESLint rule.
 */

const rule = require("./no-unnecessary-brackets");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("no-unnecessary-brackets", rule, {
  valid: [
    // Valid examples without unnecessary brackets
    { code: '<div className="example">Hello</div>' },
    { code: '<div className={"example"}>Hello</div>' },
    { code: "<div className={`example-${variable}`}>Hello</div>" },
    { code: "<div>{5}</div>" },
    { code: "<div>{variable}</div>" },
    { code: "<div>{`${variable}`}</div>" },
  ],

  invalid: [
    // Invalid examples with unnecessary brackets (expecting a warning)
    {
      code: '<div className={"example"}>Hello</div>',
      errors: [{ messageId: "unnecessaryBrackets" }],
    },
    {
      code: "<div className={`example`}>Hello</div>",
      errors: [{ messageId: "unnecessaryBrackets" }],
    },
    {
      code: '<div>{ "string" }</div>',
      errors: [{ messageId: "unnecessaryBrackets" }],
    },
    {
      code: "<div>{ `${variable}` }</div>",
      errors: [{ messageId: "unnecessaryBrackets" }],
    },
  ],
});
