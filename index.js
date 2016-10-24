module.exports = {
    "parserOptions": {
        "ecmaVersion": 5,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
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
        "no-unused-vars": 0,           // disallow declaration of variables that are not used in the code
        "no-use-before-define": 2,     // disallow use of variables before they are defined
        "brace-style": 2,              // enforce one true brace style (off by default)
        "camelcase": 2,                // require camel case names
        "comma-style": 2,              // enforce one true comma style (off by default)
        "new-parens": 2,               // disallow the omission of parentheses when invoking a constructor with no arguments
        "no-array-constructor": 2,     // disallow use of the Array constructor
        "no-inline-comments": 2,       // disallow comments inline after code (off by default)
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


        # "no-console": 0,                  // disallow use of console (off by default in the node environment)
        # "no-empty-class": 0,              // disallow the use of empty character classes in regular expressions
        # "no-extra-parens": 0,             // disallow unnecessary parentheses (off by default)
        # "no-func-assign": 0,              // disallow overwriting functions written as function declarations
        # "no-inner-declarations": 0,       // disallow function or variable declarations in nested blocks
        # "no-invalid-regexp": 0,           // disallow invalid regular expression strings in the RegExp constructor
        # "no-irregular-whitespace": 0,     // disallow irregular whitespace outside of strings and comments
        # "no-negated-in-lhs": 0,           // disallow negation of the left operand of an in expression
        # "no-regex-spaces": 0,             // disallow multiple spaces in a regular expression literal
        # "no-reserved-keys": 0,            // disallow reserved words being used as object literal keys (off by default)
        # "use-isnan": 0,                   // disallow comparisons with the value NaN
        # "block-scoped-var": 0,            // treat var statements as if they were block scoped (off by default)
        # "complexity": 0,                  // specify the maximum cyclomatic complexity allowed in a program (off by default)
        # "consistent-return": 0,           // require return statements to either always or never specify values
        # "curly": 0,                       // specify curly brace conventions for all control statements
        # "default-case": 0,                // require default case in switch statements (off by default)
        # "dot-notation": 0,                // encourages use of dot notation whenever possible
        # "eqeqeq": 0,                      // require the use of === and !==
        # "guard-for-in": 0,                // make sure for-in loops have an if statement (off by default)
        # "no-caller": 0,                   // disallow use of arguments.caller or arguments.callee
        # "no-div-regex": 0,                // disallow division operators explicitly at beginning of regular expression (off by default)
        # "no-empty-label": 0,              // disallow use of labels for anything other then loops and switches
        # "no-eq-null": 0,                  // disallow comparisons to null without a type-checking operator (off by default)
        # "no-extra-bind": 0,               // disallow unnecessary function binding
        # "no-fallthrough": 0,              // disallow fallthrough of case statements
        # "no-floating-decimal": 0,         // disallow the use of leading or trailing decimal points in numeric literals (off by default)
        # "no-multi-str": 0,                // disallow use of multiline strings
        # "no-new-func": 0,                 // disallow use of new operator for Function object
        # "no-octal": 0,                    // disallow use of octal literals
        # "no-octal-escape": 0,             // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
        # "no-process-env": 0,              // disallow use of process.env (off by default)
        # "no-redeclare": 0,                // disallow declaring the same variable more then once
        # "no-self-compare": 0,             // disallow comparisons where both sides are exactly the same (off by default)
        # "no-unused-expressions": 0,       // disallow usage of expressions in statement position
        # "no-warning-comments": 0,         // disallow usage of configurable warning terms in comments, e.g. TODO or FIXME (off by default)
        # "vars-on-top": 0,                 // requires to declare all vars on top of their containing scope (off by default)
        # "yoda": 0,                        // require or disallow Yoda conditions
        # "no-catch-shadow": 0,             // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
        # "no-label-var": 0,                // disallow labels that share a name with a variable
        # "no-shadow": 0,                   // disallow declaration of variables already declared in the outer scope
        # "no-shadow-restricted-names": 0,  // disallow shadowing of names such as arguments
        # "no-undef": 0,                    // disallow use of undeclared variables unless mentioned in a /*global */ block
        # "no-undef-init": 0,               // disallow use of undefined when initializing variables
        # "no-undefined": 0,                // disallow use of undefined variable (off by default)
        # "comma-spacing": 0,               // enforce spacing before and after comma
        # "eol-last": 0,                    // enforce newline at the end of file, with no multiple empty lines
        # "func-names": 0,                  // require function expressions to have a name (off by default)
        # "func-style": 0,                  // enforces use of function declarations or expressions (off by default)
        # "max-nested-callbacks": 0,        // specify the maximum depth callbacks can be nested (off by default)
        # "new-cap": 0,                     // require a capital letter for constructors
        # "no-multiple-empty-lines": 0,     // disallow multiple empty lines (off by default)
        # "no-nested-ternary": 0,           // disallow nested ternary expressions (off by default)
        # "no-spaced-func": 0,              // disallow space between function identifier and application
        # "no-ternary": 0,                  // disallow the use of ternary operators (off by default)
        # "no-wrap-func": 0,                // disallow wrapping of non-IIFE statements in parens
        # "one-var": 0,                     // allow just one var statement per function (off by default)
        # "padded-blocks": 0,               // enforce padding within blocks (off by default)
        # "quote-props": 0,                 // require quotes around object literal property names (off by default)
        # "quotes": 0,                      // specify whether double or single quotes should be used
        # "sort-vars": 0,                   // sort variables within the same declaration block (off by default)
        # "space-before-blocks": 0,         // require or disallow space before blocks (off by default)
        # "space-in-brackets": 0,           // require or disallow spaces inside brackets (off by default)
        # "space-in-parens": 0,             // require or disallow spaces inside parentheses (off by default)
        # "space-unary-ops": 0,             // Require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
        # "wrap-regex": 0,                  // require regex literals to be wrapped in parentheses (off by default)
        # "no-extend-native": 0,            // disallow adding to native types
        # "no-extra-boolean-cast": 0,       // disallow double-negation boolean casts in a boolean context
        #"no-else-return": 0,               // disallow else after a return in an if (off by default)
    },
}
