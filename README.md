# Unit 10: Object Oriented Programming and TDD

## Overview

In this unit, we will discuss JavaScript's brand of OOP by introducing constructors and the prototype chain. Constructors are special functions that are extremely useful in creating objects of similar types. Prototypes are JavaScript’s built in system, allowing objects to inherit features from other objects. Prototypes are considered by many to be an advanced JavaScript topic and mastering it will be sure to give you an extra edge as a JavaScript developer.

We will cover test driven-development (TDD). When practicing TDD, we first write tests for application features before writing any code. Then, we write only the minimum amount of code needed to make the tests pass and repeat this process until the application is complete. Test-driven development has numerous benefits but ultimately helps us write more understandable and maintainable code.

We will conclude this unit with an introduction to modern class syntax and inheritance. ES6 introduced a `class` keyword which allows us to create objects using class structures similar to those found in other OOP programming languages. Under the hood, classes are just constructor functions with more intuitive syntax. They allow us to implement more advanced OOP patterns such as inheritance without needing to understand all of the nuances of JavaScript's prototypal inheritance system.

## Key Topics

* Objects

* this

* Callbacks

* Constructors

* Prototypes

* TDD

* Unit Tests

* Classes

* Inheritance

## Comprehension Check

You will be employer-ready if you can answer the following questions:

1. What is a constructor function and how would you use one?

2. What is the difference between classical inheritance and prototypal inheritance?

3. What are some benefits of test-driven development?
  - Get an error back
  - Save time
  - Reveal bugs
  - Show unintended bugs in area A when code was changed in area B
  - Improve code

## Learning Objectives

You will be employer-competitive if you are able to:

* Integrate constructor functions into your applications, adding structure to your code and reducing the amount of code you have to write.

* Build entire applications using OOP, separating data and functionality into different constructor functions that can be composed together.

* Verify your code works as intended through the use of automated tests.

* Build applications using test-driven-development, writing tests before implementing functionality.

* Utilize modern ES6 class syntax to implement more advanced OOP patterns such as inheritance.

* Create more scalable applications that follow the OOP paradigm.

## Homework: Word Guess With Constructors

* In this unit's assignment, you will create a Word Guess command-line game using constructor functions.

## Helpful Links

* [Constructor Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)

* [Prototype Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)

* [Class Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

* [Jest Docs](https://jestjs.io/)
eer.html`
  
  * `intern.html`
  
  * `manager.html`

* You will want to make your methods as pure as possible. This means try to make your methods simple so that they are easier to test.

* The different employee types should all inherit some methods and properties from a base class of `Employee`.

* In your HTML template files, you may want to add a placeholder character that helps your program identify where the dynamic markup begins and ends.

## Minimum Requirements

* Functional application.

* GitHub repository with a unique name and a README describing the project.

* User can use the CLI to generate an HTML page that displays information about their team.

* All tests must pass.

### Classes
The project must have the these classes: `Employee`, `Manager`, `Engineer`,
`Intern`. The tests for these classes in the `tests` directory must all pass.

The first class is an `Employee` parent class with the following properties and
methods:

  * name
  * id
  * email
  * getName()
  * getId()
  * getEmail()
  * getRole() // Returns 'Employee'

The other three classes will extend `Employee`. 

In addition to `Employee`'s properties and methods, `Manager` will also have:

  * officeNumber

  * getRole() // Overridden to return 'Manager'

In addition to `Employee`'s properties and methods, `Engineer` will also have:

  * github  // GitHub username

  * getGithub()

  * getRole() // Overridden to return 'Engineer'

In addition to `Employee`'s properties and methods, `Intern` will also have:

  * school 

  * getSchool()

  * getRole() // Overridden to return 'Intern'

### User input

The project must prompt the user to build an engineering team. An engineering
team consists of a manager, and any number of engineers and interns.

### Roster output

The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

  * Name

  * Role

  * ID

  * Role-specific property (School, link to GitHub profile, or office number)

## Bonus

* Use validation to ensure that the information provided is in the proper expected format.

* Add the application to your portfolio.

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

* Your commit history is a signal to employers that you are actively working on projects and learning new skills.

* Your commit history allows you to revert your codebase in the event that you need to return to a previous state.

Follow these guidelines for committing:

* Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

* Don't commit half-done work, for the sake of your collaborators (and your future self!).

* Test your application before you commit to ensure functionality at every step in the development process.

We would like you to have well over 200 commits by graduation, so commit early and often!


## Submission on BCS

You are required to submit the following:

* The URL of the GitHub repository

* **Optional**: GIF of your CLI applications functionality

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
