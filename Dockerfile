# syntax=docker/dockerfile:1

# Use the official Ruby image
FROM ruby:3.3.6

# Install dependencies
RUN apt-get update -qq && apt-get install -y \
  postgresql-client \
  libssl-dev \
  libreadline-dev \
  zlib1g-dev \
  build-essential

# Install Yarn & Node v22.x
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg -o /root/yarn-pubkey.gpg && apt-key add /root/yarn-pubkey.gpg
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
RUN apt-get update && apt-get install -y --no-install-recommends nodejs yarn

# Set the working directory
WORKDIR /community-exchange

# Copy the Gemfile and Gemfile.lock
COPY Gemfile /community-exchange/Gemfile
COPY Gemfile.lock /community-exchange/Gemfile.lock

# Install Gems dependencies
RUN gem install bundler && bundle install
RUN yarn install

# Copy the application code
COPY . /community-exchange

# Precompile assets (optional, if using Rails with assets)
# RUN bundle exec rake assets:precompile

# Expose the port the app runs on
EXPOSE 3000

# Command to run the server
CMD ["rails", "server", "-b", "0.0.0.0"]
