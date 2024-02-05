/**
 * @fileoverview Warns when string literals are supplied inside curly brackets in jsx
 * @author Chris Drifte
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Warns when string literals are supplied inside curly brackets in jsx",
      recommended: false,
    },
    fixable: null,
    schema: [],
    messages: {
      unnecessaryBrackets:
        "Avoid unnecessary {} around a string literal in JSX.",
    },
  },

  create(context) {
    return {
      JSXExpressionContainer: function (node) {
        if (
          node.expression.type === "Literal" &&
          typeof node.expression.value === "string"
        ) {
          context.report({
            node,
            messageId: "unnecessaryBrackets",
          });
        }
      },
    };
  },
};
