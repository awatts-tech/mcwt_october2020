# Front End Review

## HTML

HTML is the "structure" of how your display content. Any text, images, or navigation is going to be created using HTML.

### Anatomy of HTML

HTML is comprised of tags, which look like this

```
    <tagname id="unique-indentifier" class="some-class some-other-class"> </tagname>
```

In this case, id and class are called _attributes_, meaning they are key-value pairs so you can provide more information about a tag, for use in CSS or JS.

IDs are unique, meaning you can only have one of each ID per page. A tag can have multiple classes.

HTML is nested, meaning you can have tags inside of others, an example is

```
    <section>
        <h2> Blog Title </h2>
        <p> Paragraph 1 <p/>
        <p> Paragraph 2 </p>
    </section>

```

### Forms

Forms are the native way of passing data from the front end to the back end.

There are many form elements: https://www.w3schools.com/html/html_form_elements.asp

These form elements are wrapped in `<form action="url/to/submit/to" method="GET or POST"> </form>`, and when you submit the form, the content can be sent to a server using either a POST or a GET.

Questions:

- What does is mean to have "semantic" tags? Why is it important?
- How do you create a radio button?
- What is the benefit of wrapping a form in a label?

## CSS

CSS is the way that you control the style of elements on a page. It stands for Cascading Style Sheets, the "cascading" means that if you add a style to a parent element, that style is by default carried over into the children. You can control font faces, colors, backgrounds colors, spacing (margin and padding), and animations, to name a few.

### Anatomy of CSS

CSS is in the style of

```
selector {
    style-name: style-value
}
```

for example

```
.container {
    background-color: gray;
}
```

There are lots of different ways you can select items in CSS, here is a list https://www.freecodecamp.org/news/css-selectors-cheat-sheet/

### Responsive CSS

#### Flex Box

Flex box is a way of developing responsive pages. The purpose of flex box is to automatically adjust the spacing of elements on the page depending on the screen size. Flexbox is really useful for arranging content with complicated needs, such as a navigation bar where the links are always evenly spread across the page.

Play https://flexboxfroggy.com/ for some review!

#### Media Queries

Media queries allow you to apply specific CSS rules to specific screen sizes. You can also use media queries for targeting styles for when someone does a print preview.

Here's an example media query:

```
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

##### Practice

Given

```
<ul>
    <li> List 1 </li>
    <li> List 2 </li>
    <li> List 3 </li>
</ul>
```

How could you use display flex to make the list items display top-to-bottom on mobile and side-to-side on all other screen sizes?

### Questions

- What is the difference between using px and rem?
- How do select an item based on
  - an id
  - a class
  - Whether it's parent is a certain type (for example, all the `<p>` tags inside of a `<section>`)
- When we say "mobile-first", what screen sizes should be in your media queries?

## JavaScript

JavaScript controls the logic of your page. It allows you to dynamically set or move content around. It is what makes web apps useful and powerful.

### Anatomy of JavaScript

JavaScipt is made of _variables_, which is your data, _control structures_, which is your logic, and _functions and classes_, which allow you to re-use data and logic in multiple places.

#### Variables

Variables contain data, and then can be one of 9 different types: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures.

#### Control Structures

Controls strucures are ways of controlling the flow of your data. They are the heart and soul of programming, and is what makes programming dynamic and reusable. There are a number of structures (https://en.wikibooks.org/wiki/JavaScript/Control_structures), but they boil down to two types:

##### Loops

Loops allow you to run the same block of code repeatedly, until a certain condition is reached.

For example

```

    for (let i = 1; i < 10; i++) {
        console.log(i);
    }

```

will count to 10.

#### Conditionals

Conditionals are used to say, if a certain condition is true, execute this block of code.

For example

```

if ( color === 'red' ) {
// do this
} else {
// do that
}

```

You can combine `if` statements using `&&` for "and", or `||` for "or"

### Functions

Functions allow you to re-use blocks of code, and pass in different data to make it dynamic.

For example

```
    function sayHello(name) {
        console.log(`Hello, ${name}`);
    }

```

will create a variable called name, that is set to what ever you pass into it. This is called a _parameter_.

So you can call the function using

```
    sayHello("Grant Chirpus");
    sayHello("Batman");
```

this the data that you pass into a function is called an _argument_.

A new version of writing functions is using arrow functions, which uses this syntax:

```
    const sayHello = (name) => console.log(`Hello, ${name}`);
```

Arrow functions are nice because they allow you to write the same thing with much less code.

### Classes

Classes are a way of easily creating an object based on reusable logic. Classes contain both variables and functions, that are scoped to the individual object that is created from a class. Variables inside of classes are called _properties_, and functions are called _methods_.

for example

```
class Car  {
    speed = 0;
    drive() {
        this.speed++;
    }
}
const car = new Car();
car.drive();
const car1 = new Car();

```

will create an 2 separate objects. `car` will finish with a speed of 1, where `car1` still has a speed of `0`;

#### Questions

- What is the difference between var, const, let, and this?
- When should you use a `while` loop vs for `loop`?
- What is the difference between `=` , `==` and `===`?
- What is "hoisting"?
- What are three ways to loop through all the items in an array?
