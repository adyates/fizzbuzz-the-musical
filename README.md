What is this repo?
==================

This is pretty much a playground for Code Bowling implementations of Fizz Buzz in various languages.


What is Code Bowling?
=====================

In my mind, it's the natural opposite of code golf.  And, like real bowling, every language probably has an
upper limit to the amount of code bloat you can add while still adding novel and unique (without going 
"avant-garde") patterns.  Or so I would like to believe.


What is Fizz Buzz?
==================

Generally, you should always start by [trying to Google it first](http://lmgtfy.com/?q=What+is+Fizz+Buzz%3F).
If for some reason you ended up here while doing so, you ended up in one of two likely use cases:
  
  * You don't know why this is interesting: Add "Jeff Atwood" to your search
  * You're looking for an implementation: You're... welcome?  But if you plan on using any of these for 
    an evaluation scenario (interview, school assignment, what have you) I can guarantee you have already
    failed.  This repository is a beautiful train wreck waiting to happen.

Or you could look below at the spec I'm working with at the moment for the sake of doing this.


What are the rules for Fizz Buzz Musical?
=========================================

Pretty simple.

  1. Create a folder for the language
  2. Create a base working Fizz Buzz
  3. Create test cases for said Fizz Buzz
  4. Add README governing the development of that language based on regular principles / satires of the language
  5. Refactor Fizz Buzz to grow while passing the Fizz Buzz


The working specification for Fizz Buzz as follows (With "print" being used liberally):

  * Print the numbers 1-100
  * If the number is:
    * Divisible by 3: Print Fizz
    * Divisible by 5: Print Buzz
    * Divisible by 3 and 5: Print FizzBuzz

Each language added needs to fulfill the following requirements:

  * Dependencies must be declared in tune with conventions of the day (e.g. package managers, tooling).
  * A legitimate testing framework must be used if one exists (e.g. JUnit, flavors of Chai).  Diffing output is insufficient.
  * Each language much be built/test from a single line script.
  
For some languages, test may be... difficult (Such as the HTML/CSS version that currently exists, or a potential version running as an NES ROM).  In such cases, validation of compilation or common lint
usage is sufficient.


Why are you doing this?
=======================

See [the repo blog.](http://adyates.github.io/blog/repo/fizzbuzz/2015/06/01/why-fizzbuzz-the-musical.html)

