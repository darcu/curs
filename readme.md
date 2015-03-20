# JavaScript
## Part I: data types and basics

---

# Data types

**Primitives**
- Boolean
- Number
- String
- Null
- Undefined
- (Symbol ES6)

**Object**

---

## Boolean

Represents a logical entity and can be either **true** or **false**;

## Number

Represents numbers. There is only one type in JavaScript (64-bit double).

Can have values between -(2<sup>53</sup> - 1) and 2<sup>53</sup> - 1 .

Along with numbers, there are three special values **+Infinity**, **-Infinity** and **NaN** (not a number);

## String

Represent text data.

## Null

A special data type used to represent "empty" values, that is when a variable doesn't have any value, but has been initialized. Null has only one value: **null**.

## Undefined

All variables are initialized with **undefined**.

---

# Objects

An object is a collection of name (key) / value pairs. Keys can only be strings, values can be anything, including functions or other objects.

```javascript
var a = {
	prop1: 3,
	prop2: 'proprietate'
};

console.log( a.prop1 );		// 3

console.log( a['prop2'] );	// proprietate
```

There are several ways of initializing an object. We'll get into more detail in the next lesson.

---

## Objects

"Everything" in JavaScript is an Object.

- A function is an object with the only distinction that it can be "called".

- Numbers, booleans and strings are also sometimes objects.

- Arrays are objects as well.

---

## Arrays

Arrays are an indexed collection of values. The behave just like regular objects, i.e. can have their own methods and properties. However, the values are accessed via an index number, not a key. The index starts at 0. They are not a primitive data type.

```javascript
var arr = [5, 'valoare', true];

arr[1] === 'valoare'; // true
arr.length;			// 3


arr.push(3);
arr[3] === 3;			// true
arr.length			// 4
```

---

#### the typeof operator

One simple way of checking the type of a variable is to use the **typeof** operator

```javascript
typeof 2			"number"
typeof '2'			"string"
typeof true			"boolean"
typeof {} 			"object"
typeof null			"object"
typeof []			"object"
typeof NaN			"number"
typeof undefined	"undefined"
typeof a 			"undefined"
```

---

## Expressions

An expression is any valid unit of code that resolves to a value. They come in two main types, expressions that assign a value and those that have value.

```javascript
x = 3

3 + 4
```

Expression categories:
- arithmetic: evaluate to a number
- string: evaluate to a string
- logical: evaluate to **true** or **false**
- object: evaluate to an object

---

## Operators

Operators generally work from right to left, i.e the right-most component is evaluated first.

#### Assignment

For assignment, this means that the left-side variable takes the value on the right side of the operator

```javascript
x = y
```

x takes the value of y

```javascript
x += y	
x /= y
```

is the same as

```javascript
x = x + y	
x = x / y
```

#### Arithmetic

```javascript
	+	-	*	/
```

- addition	
- subtraction	
- multiplication	
- division	

```javascript
	%	++	--
```

- modulo
- increment
- decrement

```javascript
x 	= 	0;
++x	===	1;
x++	===	1;
x 	===	2;
--x	===	1;
```

#### Comparison

```javascript
	==	===	!=	!==	<	>	<=	>=
```

**==** vs **===** (equal vs strict equal)

Equal == evaluates to true if the two values are identical

```javascript
var = 3;

a == 3		// true
a == '3'	// true
3 == '3'	// true
```

Strict equal === evaluates to true if the two values are identical and have the same type.

```javascript
var = 3;

a === 3		// true
a === '3'	// false
3 === '3'	// false
```

More on equality comparison and sameness [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness).

#### Logical

```javascript
	&& || !
```

Logical AND

```javascript
var a1 = true && true;      // t && t returns true
var a2 = true && false;     // t && f returns false
var a3 = false && true;     // f && t returns false
var a4 = false && (3 == 4); // f && f returns false
var a5 = "Cat" && "Dog";    // t && t returns Dog
var a6 = false && "Cat";    // f && t returns false
var a7 = "Cat" && false;    // t && f returns false
```

Logical OR

```javascript
var o1 =  true || true;     // t || t returns true
var o2 = false || true;     // f || t returns true
var o3 =  true || false;    // t || f returns true
var o4 = false || (3 == 4); // f || f returns false
var o5 = "Cat" || "Dog";    // t || t returns Cat
var o6 = false || "Cat";    // f || t returns Cat
var o7 = "Cat" || false;    // t || f returns Cat
```

Logical NOT

```javascript
var n1 = !true;  // !t returns false
var n2 = !false; // !f returns true
var n3 = !"Cat"; // !t returns false
```

#### Bitwise

```javascript
	&	|	^	>>	>>>	<<
```

Bitwise AND, OR, XOR, NOT, left shift, sign-propagating right shift, zero-fill right shift

#### String

```javascript
	+

var bb = 'bibi';
'gigi' + 'mimi' + bb === 'gigimimibibi'
```

#### Ternary

```javascript
	? :

 a === 3 ? console.log('equals 3') : console.log('doesn\'t equal 3');

 if (a === 3) {
	console.log('equals 3'); 
 } else {
 	console.log('doesn\'t equal 3')
 }
```

More on expressions and operators [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators).

---

## Type conversion

Because JavaScript is **loosely-typed**, the JavaScript interpreter converts variable types on the fly, according to very specific rules;

```javascript
var a;
	typeof a 	"undefined"

a = 3;
	typeof a	"number"

a = a + '3';
	typeof a 	"string"

a = false || a;
	a becomes '33'
	typeof a 	"string"

a = true || a;
	a becomes true
	typeof a 	"boolean"

a = + a;
	a becomes 1
	typeof a 	"number"

a = a + null
	null is converted to 0 so a remains 1

a = + undefined
	undefined becomes NaN, so a becomes undefined
	typeof a 	"undefined"

a === NaN // false
	NaN is not equal to itself, because JavaScript
	typeof a 	"number"

a += 'a';
	a becomes 'NaNa'
	typeof a 	"string"

a += undefined;
	a becomes 'NaNaundefined'
	typeof a 	"string"
```

More on type conversion and equality operators [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators).

---

## Statements

- if
- switch
- while
- do
- for
- break
- continue
- return
- throw
- try/catch
- var

---

## Control flow

#### Block {}

Delimited by curly brackets **{}**. A block statement groups other statements.

#### break

Terminates the current loop or switch

#### continue

Terminates the current iteration of the loop and continues with the next one

#### if...else

Executes a statement if the condition is true, otherwise another optional statement will be executed.

#### switch

Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.

#### throw

Throws a user-defined exception.

#### try...catch

Tries a block of statements and specifies a response if an exception is thrown.

---

## Declarations

#### var

Declares a variable and optionally initializes it with a value;

```javascript
var a;
var b = 3;

a === undefined;	// is true
a === 3;			// is true
```

#### let

Declares a block-scoped local variable.

#### const

Declares a read-only (immutable) constant.

---

## Functions

#### function

Declares a function with the specified parameters.

#### return

Specifies the return value of a function.

```javascript
function ofunctie(ceva) {
	var altceva = 'altceva';
	return ceva + altceva
}
```

---

## Iterations

#### do...while

Creates a loop that runs until the condition is false. The condition is evaluated after the statements so the code is run at least once.

#### while

Creates a loop that runs until the condition is false. The condition is evaluated before the statements.

```javascript
var i = 0;
do {
	console.log('ceva');	// this code will run
} while(i < 0);

while (i < 0) {
	console.log('altceva');	// this one won't
}
```

#### for

Creates a loop with three optional expressions and a statement which is run in a loop until the middle expression is false.

```javascript
for (var i = 0; i < 5; i++) {
	console.log(i);
}
```

First the variable i is created and given the value 0. In the first run of the loop, i === 0. After the statement block is run, i is incremented and gets the value 1.

#### for...in

Iterates over the enumerable properties of an object

#### for...of

Iterates over iterable objects. Only works in ES6 (ECMAScript 6) the next 'version' of the JavaScript standard.

---

---

# JavaScript
## Part II: grammar

---

## Example

```javascript
/*
	first we declare the variables
*/
var a;
var b = 5;
var c;

a = 3;
c = a + b;



var smaller = function() {
	// 
	console.log('number is smaller than 10');
};

function bigger() {
	console.log('number is bigger than 10');
}

// if c is bigger than 10, call bigger, otherwise call smaller
if (c > 10) {
	bigger();	
} else {
	smaller();
}

```

#### Best practices

- always use semicolon **;**
- always use curly brackets **{}**
- each statement gets its own line
- space between operators and blocks

---

## Syntax

JavaScript borrows a lot from Java in terms of syntax, but is otherwise completely unrelated.

## Identifiers (names)

- starts with a letter or "_" or "$"
- followed by zero or more letters, digits, "_" or "$"
- by convention, all variables, members and function names:
	- start with lowercase (except for constructors)
	- that start with "_" should be reserved for internal use (are private)
	- that start with "$" should be reserved for machines
- cannot coincide with a reserved word

---

#### Reserved words

You don't have to remember them, but it's good to know that they exist.

- abstract
- boolean break byte
- case catch char class const continue
- debugger default delete do double
- else enum export extends
- false final finally float for function
- goto
- if implements import in instanceof int interface
- long
- native new null
- package private protected public
- return
- short static super switch synchronized
- this throw throws transient true try typeof
- var volatile void
- while with

---

#### Comments

Comments allow you to make annotations without affecting the code 

One line comments start with //

Multi-line comments are enclosed with /\* \*/

#### Declarations and statements

A statement should end with a semicolon. This is optional, but is always recommended.

```javascript
var a;
var b = 3;
```

This is also valid but is not recommended

```javascript
var c = 5
d = 8;
e = c + d
```

#### ASI - automatic semicolon insertion

JavaScript uses ASI for 'convenience'. Technically, each statement must end with a semicolon, but the JavaScript interpreters will add the semicolon where they see fit. This is prone to errors and confusion and should be avoided.

#### Code blocks

A block of statements can be enclosed in curly brackets. This is optional in some cases, but is always recommended.


```javascript
if (something) {
	// do something
} else {
	// do something else
}
```

Curly brackets can be used to create blocks of code anywhere or just to differentiate some code.

```javascript
var a = 5;
var c;
{
	var b = 15;
	c = a + b;
}

c === 20; // is true

```

It's not always necessary to use them. This is also valid code but not recommended.

```javascript
if (something)
	// do something
else
	// do something else
```

Still valid, even less recommended.

```javascript
if (something) /* do something */ else /* do something else */
```

The problem here is something like this:

```javascript
var a, b, something = false;

if (something) 
	a = 3;
	b = 5;

a === 3; // false, a === undefined
b === 5; // true

```

Is actually interpreted as:

```javascript
var a, b, something = false;

if (something) {
	a = 3;
}
b = 5;

a === 3; // false, a === undefined
b === 5; // true
```

---

## Literals

#### Array literals

```javascript
var coffees = ["French Roast", "Colombian", "Kona"];
var fish = ["Lion", , "Angel"];
var myList = ['home', , 'school', ];
var myList = [ , 'home', , 'school'];
```

#### Boolean literals

```javascript
var mimi = true;
var bibi = false;
```

#### Number literals

```javascript
// integers
0
1.3
-23.666
-.2e4
```

#### String literals

Are defined with either a single or double quotation mark

```javascript
"foo"
'bar'
'1234'
"a new \n line"
"Can't use the same type of quotation marks inside a string"
'Don\'t forget to use an escape character'
'"this" is also valid'
```

---

# JavaScript
## Part III: hoisting, scope, closure

---



---

# Variables

# global local


---

null is object 
null == undefined
null !== undefined

truthy

type

---

MDN
O'reilly
crockford


