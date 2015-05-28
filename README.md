What is this repo?
==================

This is pretty much a playground for Code Bowling implementations of Fizz Buzz in various languages.


What is Code Bowling?
=====================

In my mind, it's the natural opposite of code golf.  And, like real bowling, every language probably has an
upper limit to the amount of code bloat you can add while still adding novel and unique patterns.  Or so
I would like to believe.


What is Fizz Buzz?
==================

Google it.  If for some reason you ended up here while doing so, you ended up in one of two likely use cases:
  
  * You really don't know what it is: Add "Jeff Atwood" to your search
  * You're looking for an implementation: You're welcome, but if you plan on using any of these for 
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

For foreign language credit.   That's actually a semi-serious answer.

Going to another country in my mind is a few simple parts:

  * Seeing how things are laid out given a new set of environmental constraints and conditions.
  * Listening to a new language.
  * Embarrassing yourself as you have no idea what the social norms are.

I've had the fun of working with a *lot* of languages in my time as a programming panda.  But programming
in a new language is only half the battle.  It kinda doesn't count, in my mind, if you don't actually
do as the Romans do and still act like (in my case) a crass American pig dog tourist.

Every language or platform that is doing things that matters in the real world usually has the vast
majority of the following, if not all of it outright:

  * The Leader or Owner (e.g. Java has Sun/Oracle, Python has BDFL, you get the idea) 
  * A person that you hear of 5 minutes after joining the scene who is a positive/negative deity of 
    sorts (e.g. Douglas Crockford).  Bonus points for the high karma StackOverflow account (Alex Martelli
    is such a dream boat <3).
  * Official documentation on a well-maintained site that you end up depending on.
  * Tons of code snippets scattered among docs, blog posts, newsgroups, most of which are at least two years
    old or may be total junk, but somehow you always manage to find your particular case somewhere.
  * An xUnit framework
  * Community created libraries that follow roughly the same usage formats
  * Community-created opinions on what the best way to do almost any task is, at times wildly contradictory
  * A standardized, automated build -> test -> deploy
  * A genuine belief that it's the Right Way, or at least Better Than ____

I've been dropped into code bases like a shock trooper to make things happen without having a clue on what
the normal conventions of the language are or how to get stuff done beyond simple syntax.  Some people
are lucky enough to find a few languages they love and dive deep into those.  Others spend enough time
hacking on their own or on OSS projects that this education comes naturally.

For me, however, as generally a language agnostic hacker-for-hire of sorts, I've generally been stuck in 
pre-fab development environments and only really started doing things in a semi-correct way relatively recently. Fizz Buzz ends up as a way to have to write a project with a baseline foundation of simple
build-to-test processes in place while still being stupidly short.  That part gets a baseline knowledge of
the language, how to navigate it, and what a generally acceptable process for build tools could be.

Code bowling is where the interesting learning comes in.  It's easy to write tons of superfluous code in 
a language you are unfamiliar with (e.g. Python has a one-liner for everything, with the right module).
It's much harder to make a satire of a language that takes a perfectly reasonable convention to an extreme
because you have to know the passions of the community for it to be truly effective,
[like the Kingdom of Nouns](http://steve-yegge.blogspot.com/2006/03/execution-in-kingdom-of-nouns.html),
even though it's technically a rant.

Of course, the other reason people learn a language is for the exposure to the hot-and-exotic
<insert desired gender here>.  That doesn't really apply in my case, but being able to connect with people
over language prejudices and passions is more or less the same thing.  At least, I'd like to think so.
