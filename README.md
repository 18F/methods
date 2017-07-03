Method Cards
===============

## Why method cards?

- To add rigor and structure to agile development.
- To build a shared vocabulary for each method among 18F staff and our partner agencies.
- To give less experienced or new researchers a gateway into well-documented and proven research methods, supported by other 18F team members.

## We’ve grouped these methods into four phases

- **Discover**: Learn as much as you can about the project and people involved.
- **Decide**: Use what you’ve learned to start focusing your research on specific areas and groups of people.
- **Make**: Move toward a final product that’s ready to be released and tested.
- **Validate**: Test your research, design, and product.

## We’ve called out specifics about doing this work in government.

For the most part, the processes are the same as anywhere. However, to stay on the happy side of the law, take a look at [Recruiting](pages/recruiting/), [Incentives](pages/incentives/), [Informed consent](pages/informed-consent/), [Privacy](pages/privacy/), and the [Paperwork Reduction Act](pages/paperwork-reduction-act/). No matter which methods we work with, these are the [fundamentals](pages/fundamentals/) of our design research.

## Generating the Methods site/hosting locally

### Cloning and running 18F/methods

You will need [Ruby](https://www.ruby-lang.org) ( > version 2.1.5 ). You may
consider using a Ruby version manager such as
[rbenv](https://github.com/sstephenson/rbenv) or [rvm](https://rvm.io/) to
help ensure that Ruby version upgrades don’t mean all your
[gems](https://rubygems.org/) will need to be rebuilt.

On OS X, you can use [Homebrew](http://brew.sh/) to install Ruby in
`/usr/local/bin`, which may require you to update your `$PATH` environment
variable:

```shell
$ brew update
$ brew install ruby
```

To serve 18F Design Methods locally, using `METHODS` as the name of your new repository:

Run each of the following steps to get the site up and running.

```
git clone git@github.com:18F/methods
cd methods
bundle install
jekyll serve
```

You should be able to see the site at: http://localhost:4000/

### Forking into your own repository

If you haven’t already followed the cloning instructions above, the easiest way to do this is simply to go to https://github.com/18F/methods and click `Fork`, then set up the repository under your own username. Then follow the instructions above to clone locally, subbing in MY-USER-NAME for 18F’s in the URL that follows `git clone`.

If you _have_ already cloned locally from 18F and want to maintain your own Methods repository, do the following.

You’ll need to create a new repository on Github. To do this, go to github.com/MY-USER-NAME and click the "New Repository" button. Enter the title and description for your new guide and then click `Create Repository`. It’s easiest if you use `methods` as the name, as it will match back to the 18F Methods you’re building from.

After the repository is created, you’ll see the repository URL at the top. Copy this url by hitting the handy `Copy to Clipboard` button next to the text box.

Go back to the directory where you cloned the repository. We’re going to change this repo to point to the one you just created (which is empty), instead of back to 18F’s, and push to it.
```
git remote set-url origin https://github.com/MY-USER-NAME/METHODS.git
git push origin 18f-pages-staging
```

Now you can edit your own fork of Methods freely, and push up changes as you need.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0
>dedication. By submitting a pull request, you are agreeing to comply
>with this waiver of copyright interest.
