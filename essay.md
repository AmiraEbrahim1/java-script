B. Part 2: Essay Questions (2.5 Grade)

## 1. What is the difference between `forEach` and `for...of`? When would you use each?

Both are used to iterate over arrays, but they work differently.

* forEach(): An array method that executes a callback function for each element. You cannot use `break` or `continue` inside it.
* for...of: A loop that iterates over the values of an iterable, such as arrays and strings. You can use `break` and `continue` to control the loop.

Example:

```
let numbers = [1, 2, 3];

numbers.forEach(num => {
    console.log(num);
});

for (let num of numbers) {
    console.log(num);
}

```

When to use each?

* Use `forEach()` when you want to perform an action for every element.
* Use `for...of` when you need more control over the loop, such as using `break` or `continue`.

## 2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.

Hoisting: JavaScript moves variable and function declarations to the top of their scope during the compilation phase, before executing the code.

Example:

```
console.log(x); // undefined
var x = 10;

```

This happens because the `var` declaration is hoisted, but its assignment stays in its original place.

Function declarations are also hoisted, and unlike `var`, they are hoisted together with their whole body. This means you can call them before they are defined:

```
sayHello(); // "Hello"

function sayHello() {
    console.log("Hello");
}

```

Function expressions are different. If a function is stored in a `var` variable, only the variable is hoisted (as `undefined`), so calling it early causes a TypeError. If it is stored in `let` or `const`, it is in the TDZ and causes a ReferenceError.

```
sayHi(); // TypeError: sayHi is not a function
var sayHi = function () {
    console.log("Hi");
};

```

Temporal Dead Zone (TDZ): It is the period between entering a scope and the point where a `let` or `const` variable is initialized. Accessing the variable during this period causes a ReferenceError.

Example:

```
console.log(x); // ReferenceError
let x = 10;

```

Main difference:

* `var` is hoisted and initialized with `undefined`.
* Function declarations are hoisted with their full body, so they can be called before they are defined.
* `let` and `const` are hoisted but remain inaccessible in the TDZ until initialized.

## 3. What are the main differences between `==` and `===`?

Both operators compare values, but they handle data types differently.

* == (Loose Equality): Compares values after performing type conversion when necessary.
* === (Strict Equality): Compares both value and data type without type conversion.

Example:

```
console.log(5 == "5");  // true
console.log(5 === "5"); // false

```

In the first example, JavaScript converts the string `"5"` into a number before comparing.
In the second example, the types are different, so the result is `false`.

Recommendation: Use `===` in most cases because it avoids unexpected type conversions.

## 4. Explain how try-catch works and why it is important in async operations.

`try-catch` is used to handle errors and prevent the program from stopping unexpectedly.

* try: Contains the code that might produce an error.
* catch: Handles the error if one occurs.

Example:

```
try {
    let result = JSON.parse("invalid JSON");
    console.log(result);
} catch (error) {
    console.log("Something went wrong:", error.message);
}

```

In async operations:
When using `async/await`, `try-catch` helps handle errors from rejected Promises, such as failed API requests.

Example:

```
async function getData() {
    try {
        let response = await fetch("https://example.com/api");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

```

Why is it important?
It allows us to handle errors properly, prevent unhandled Promise rejections, and keep the application running smoothly.

## 5. What's the difference between type conversion and coercion? Provide examples of each.

Both involve changing a value from one data type to another, but the difference is how the conversion happens.

Type Conversion (Explicit):
When the developer manually converts a value from one type to another using functions such as `Number()`, `String()`, or `Boolean()`.

Example:

```
let value = "123";
let result = Number(value);

console.log(result);        // 123
console.log(typeof result); // number

```

Here, we explicitly converted the string into a number using `Number()`.

Type Coercion (Implicit):
When JavaScript automatically converts a value from one type to another during an operation.

Example:

```
let result = "5" + 2;

console.log(result);        // "52"
console.log(typeof result); // string

```

Here, JavaScript automatically converts the number `2` into a string and concatenates the two values.

Main difference:

* Type Conversion: Done manually by the developer.
* Type Coercion: Done automatically by JavaScript.
