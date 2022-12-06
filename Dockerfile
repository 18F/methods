# Dockerfile
# Use ruby image
FROM ruby:2.7.2

# Everything following will happen within this folder
WORKDIR /usr/src/app

# Use the Gem lock file to specify our Ruby dependency versions
COPY Gemfile Gemfile.lock ./

# Install Ruby dependencies
RUN bundle install

# The ExecJS Ruby gem needs a Javascript runtime of some sort, so we'll download the latest Node version
RUN apt update
RUN apt --assume-yes install nodejs

# Set UTF-8 for all locales
ENV LC_ALL=C.UTF-8

# Serve the site
CMD bundle exec jekyll serve --host 0.0.0.0 --incremental
