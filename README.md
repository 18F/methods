# Methods

The 18F Method Cards (“18F Methods”) describe how 18F puts human-centered design into practice. While this is primarily maintained as an internal resource, we hope it can help *everyone* adopt the methods of human-centered design.

## Why methods?

In order to function well within cross-functional teams, designers need to know a few things: which methods they might choose from, why one particular method makes more sense than another at any given moment, and, once they’ve picked a method, how to actually execute it. 18F Methods collects this essential information as a series of cards. In practice, we’ve found the Methods can provide folks with a gateway into our work and build internal alignment around a shared vocabulary.

### Specific to 18F, specific to the federal government

It’s important to note that the 18F Methods are designed to account for two things that may not otherwise concern a more generic collection of design methods. First, these methods directly reflect and support 18F’s human-centered work. (They are also continuously updated in a human-centered way — how meta!) Second, 18F Methods are designed to keep federal employees on the happy side of the law. This collection specifically includes helpful information on topics for which designers working in the federal government may need clarification, such as privacy and the Paperwork Reduction Act.

## Getting started

### Reading the Methods online

You’re presently looking at the Methods’ GitHub (code) repository. Please [visit our homepage](https://methods.18f.gov) to read the Methods online.

### Printing the Methods
To print a copy of the Methods for offline use, visit the [Methods print page](https://methods.18f.gov/print/). You may need to select `file → print…` from your web browser.

### Running the Methods website on your local machine

You will need [Ruby](https://www.ruby-lang.org) ( > version 2.1.5 ). You may consider using a Ruby version manager such as [rbenv](https://github.com/sstephenson/rbenv) or [rvm](https://rvm.io/) to help ensure that Ruby version upgrades don’t mean all your [gems](https://rubygems.org/) will need to be rebuilt.

On OS X, you can use [Homebrew](http://brew.sh/) to install Ruby in `/usr/local/bin`, which may require you to update your `$PATH` environment variable:

```
shell
$ brew update
$ brew install ruby
```

To serve 18F Methods locally, using `methods` as the name of your new repository:
Run each of the following steps to get the site up and running.

```
git clone git@github.com:18F/methods
cd methods
bundle install
jekyll serve
```

You should be able to see the site at: `http://localhost:4000/`

### Contributing to the Methods
For more information on contributing to the Methods (or even making a suggestion), see [CONTRIBUTING.md](https://github.com/18F/methods/blob/staging/CONTRIBUTING.md).

## Current team

- Product owner: Julia Lindpaintner
- Designer (researcher): Andrew Maier

## Past contributors

- Melissa Braxton
- Jeremy Canfield
- Erica Deahl
- Carolyn Dew
- Andre Francisco
- James Hupp
- Nicky Krause
- Colin MacArthur
- Brad Nunnally
- Eric Ronne
- Jennifer Thibault
- Russ Unger
- Victor Zapanta
- Scott Weber

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):
> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
