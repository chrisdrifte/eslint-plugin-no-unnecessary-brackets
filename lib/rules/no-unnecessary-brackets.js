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
    fixable: "code",
    schema: [],
    messages: {
      unnecessaryBrackets:
        "Avoid unnecessary {} around a string literal in JSX.",
    },
  },

  create(context) {
    return {
      JSXAttribute: function (node) {
        if (
          node.value &&
          node.value.type === "JSXExpressionContainer" &&
          node.value.expression.type === "Literal" &&
          typeof node.value.expression.value === "string"
        ) {
          const fix = (fixer) => {
            // Fix for JSXAttribute: removes the unnecessary curly brackets and quotes
            const quote = node.value.expression.raw[0];

            return fixer.replaceText(
              node.value,
              `${quote}${node.value.expression.value}${quote}`
            );
          };

          context.report({
            node: node.value,
            messageId: "unnecessaryBrackets",
            fix,
          });
        }
      },
      JSXElement(node) {
        for (let i = 0; i < node.children.length; i++) {
          if (
            node.children[i].type === "JSXExpressionContainer" &&
            node.children[i].expression.type === "Literal" &&
            typeof node.children[i].expression.value === "string" &&
            node.children[i].expression.value !== " " // allow {" "}
          ) {
            const fix = (fixer) => {
              // Fix for JSXElement with string literal child: removes the unnecessary curly brackets and quotes
              return fixer.replaceText(
                node.children[i],
                node.children[i].expression.value
              );
            };

            context.report({
              node: node.children[i],
              messageId: "unnecessaryBrackets",
              fix,
            });
          }
        }
      },
    };
  },
};
