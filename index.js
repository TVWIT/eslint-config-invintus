module.exports = {
    "env": {
      "es6": true,
      "node": true,
      "browser": true
    },
    "plugins": [
        "react"
    ],
    "globals": {
        "document": false,
        "navigator": false,
        "window": false
    },
    "parserOptions": {
        "ecmaVersion": 5,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "react/jsx-uses-vars": [2],     // linting for jsx used vars stuff
        "comma-dangle": 2,             // disallow trailing commas in object literals
        "no-cond-assign": 2,           // disallow assignment in conditional expressions
        "no-constant-condition": 2,    // disallow use of constant expressions in conditions
        "no-control-regex": 2,         // disallow control characters in regular expressions
        "no-debugger": 2,              // disallow use of debugger
        "no-dupe-keys": 2,             // disallow duplicate keys when creating object literals
        "no-empty": 2,                 // disallow empty statements
        "no-extra-semi": 2,            // disallow unnecessary semicolons
        "no-obj-calls": 2,             // disallow the use of object properties of the global object (Math and JSON) as functions
        "no-sparse-arrays": 2,         // disallow sparse arrays
        "no-unreachable": 1,           // disallow unreachable statements after a return, throw, continue, or break statement
        "valid-jsdoc": 1,              // Ensure JSDoc comments are valid (off by default)
        "valid-typeof": 2,             // Ensure that the results of typeof are compared against a valid string
        "no-alert": 2,                 // disallow the use of alert, confirm, and prompt
        "no-eval": 2,                  // disallow use of eval()
        "no-implied-eval": 2,          // disallow use of eval()-like methods
        "no-iterator": 2,              // disallow usage of __iterator__ property
        "no-labels": 2,                // disallow use of labeled statements
        "no-lone-blocks": 2,           // disallow unnecessary nested blocks
        "no-loop-func": 2,             // disallow creation of functions within loops
        "no-multi-spaces": 2,          // disallow use of multiple spaces
        "no-native-reassign": 2,       // disallow reassignments of native objects
        "no-new": 2,                   // disallow use of new operator when not part of the assignment or comparison
        "no-new-wrappers": 2,          // disallows creating new instances of String, Number, and Boolean
        "no-proto": 2,                 // disallow usage of __proto__ property
        "no-return-assign": 2,         // disallow use of assignment in return statement
        "no-script-url": 2,            // disallow use of javascript: urls.
        "no-sequences": 2,             // disallow use of comma operator
        "no-void": 2,                  // disallow use of void operator (off by default)
        "no-with": 2,                  // disallow use of the with statement
        "radix": 2,                    // require use of the second argument for parseInt() (off by default)
        "wrap-iife": [2, "inside"],    // require immediate function invocation to be wrapped in parentheses (off by default)
        "no-delete-var": 2,            // disallow deletion of variables
        "no-unused-vars": [2, {"args": "none"}],           // disallow declaration of variables that are not used in the code
        // "no-use-before-define": 2,     // disallow use of variables before they are defined
        "brace-style": 2,              // enforce one true brace style (off by default)
        "camelcase": 2,                // require camel case names
        "comma-style": 2,              // enforce one true comma style (off by default)
        "new-parens": 2,               // disallow the omission of parentheses when invoking a constructor with no arguments
        "no-array-constructor": 2,     // disallow use of the Array constructor
        "no-inline-comments": 0,       // disallow comments inline after code (off by default)
        "no-lonely-if": 1,             // disallow if as the only statement in an else block (off by default)
        "no-mixed-spaces-and-tabs": 2, // disallow mixed spaces and tabs for indentation
        "no-new-object": 2,            // disallow use of the Object constructor
        "no-trailing-spaces": 1,       // disallow trailing whitespace at the end of lines
        "no-underscore-dangle": 0,     // disallow dangling underscores in identifiers
        "operator-assignment": 1,      // require assignment operator shorthand where possible or prohibit it entirely (off by default)
        "semi": 2,                     // require or disallow use of semicolons instead of ASI
        "space-infix-ops": 2,          // require spaces around operators
        "spaced-comment": 2,           // require or disallow a space immediately following the // in a line comment (off by default)
        "keyword-spacing": 2,          // require spaces after and before keywords where appropriate
        "no-ex-assign": 2,             // disallow assigning to the exception in a catch block

        "indent": [2, 4, {"SwitchCase": 1}],                         // indent 4 spaces, including after case statements
        "consistent-this": [2, "self"],                              // enforces consistent naming when capturing the current execution context (off by default)
        "space-before-function-paren": [2, "always"],                // require a space after function names (off by default)
        "key-spacing": [2, {"mode": "strict"}],                      // enforces spacing between keys and values in object literal properties
        "semi-spacing": ["error", {"before": false, "after": true}], // disallow space before semicolon
        "no-undef": [2]
    }
};
