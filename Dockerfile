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

# Install Node v22.x
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
RUN apt-get update && apt-get install -y --no-install-recommends nodejs

# Set the working directory
WORKDIR /community-exchange

# Copy the Gemfile and Gemfile.lock
COPY Gemfile Gemfile.lock ./

# Install Gems dependencies
RUN gem install bundler && bundle install

# Copy package.json and package-lock.json before other application code
COPY package.json package-lock.json ./
RUN npm ci

# Copy the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the server
CMD ["rails", "server", "-b", "0.0.0.0"]
