# README

## Useful commands

Stop db docker container:

```
docker ps -a
docker stop <container-name>
docker rm <container-name>
```

kill PIDs:

```
sudo lsof -i:5432
sudo kill -15 <pid>
```

# Community Exchange

## Development with Docker

Start the application and PostgreSQL database:

```sh
docker compose up --build
```

Open the application at <http://localhost:3000>.

Stop the services:

```sh
docker compose down
```

Run the Rails test suite:

```sh
docker compose run --rm web bundle exec rails test
```

## Security audit

Check the locked Ruby gems against the Bundler Audit advisory database:

```sh
npm run audit:gems
```

Update the gems identified by the audit:

```sh
docker compose run --rm web bundle update <gem-name-1> <gem-name-2>
```

For example:

```sh
docker compose run --rm web bundle update nokogiri rack rails-html-sanitizer
```

After updating dependencies, run the tests and audit again:

```sh
docker compose run --rm web bundle exec rails test
npm run audit:gems
```

Commit `Gemfile.lock` after reviewing and successfully testing the dependency changes.

## Stop a local database container

List containers:

```sh
docker ps -a
```

Stop and remove a container:

```sh
docker stop <container-name>
docker rm <container-name>
```

## Find and stop the process using port 5432

```sh
sudo lsof -i:5432
sudo kill -15 <pid>
```
