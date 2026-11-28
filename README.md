# Community Exchange

Rails 8 backend with Vite + React frontend, running in Docker.

## Development

Start services (foreground logs):

```sh
npm run dev
```

Stop services and clean Docker volumes:

```sh
npm run dev:down
```

Stop services and clear Rails PID lock:

```sh
npm run dev:stop
```

Full restart (stop + PID cleanup + rebuild):

```sh
npm run dev:restart
```

App URL:

```text
http://localhost:3000
```

## Running Commands in the Container

These need the dev services running (`npm run dev`).

Open a shell inside the `web` container:

```sh
npm run docker:sh
```

Run any one-off command inside the container (put `--` before the command):

```sh
npm run docker:exec -- bin/rails db:migrate
npm run docker:exec -- bundle exec rails test
```

Rails console and route list:

```sh
npm run rails:console
npm run rails:routes
```

## Adding Packages

`node_modules` and gems live inside Docker, so install through the container to keep the lockfiles in sync:

```sh
docker compose run --rm web npm install <package>
docker compose run --rm web bundle add <gem>
```

Then rebuild with `npm run dev:restart`.

## Frontend Structure

The new site uses Inertia + React (`app/javascript`). The old ERB pages still run at `/` until they are replaced.

```text
app/javascript/
  entrypoints/   site.jsx (new site), application.jsx (old ERB pages)
  pages/         one folder per Inertia page: Home/index.jsx + styles.css
  components/    one folder per component: EventCard/index.jsx + styles.css
  lib/           shared helpers (event times, calendar files)
  styles/        theme.css (colors, fonts, buttons)
  images/        images imported by components
```

- A controller's `render inertia: "Home"` loads `pages/Home/index.jsx`. Each page is listed in `entrypoints/site.jsx`, so add a line there when you add a page folder.
- Page data comes from controller concerns, for example `EventConcern` for events and `ParticipateConcern` for the How To Participate cards.
- The new homepage is at `http://localhost:3000/home` while it's in progress.

## Build and Test

Build frontend assets with Vite:

```sh
npm run build
```

Run Rails tests:

```sh
docker compose run --rm web bundle exec rails test
```

## Security Audits

Run both Ruby and npm audits:

```sh
npm run audit
```

Run Ruby gem audit only:

```sh
npm run audit:gems
```

Run npm audit only (inside container):

```sh
npm run audit:npm
```

Apply available fixes for both ecosystems:

```sh
npm run audit:fix
```

Apply Ruby fixes only:

```sh
npm run audit:fix:gems
```

Apply npm fixes only:

```sh
npm run audit:fix:npm
```

## Deployment Note (Heroku)

This app uses Vite for frontend builds. Heroku needs both buildpacks, in this order, so `npm` and asset compilation run during deploy:

1. `heroku/nodejs`
2. `heroku/ruby`

Only `package-lock.json` should be committed (no `yarn.lock`), because Heroku refuses to build when it finds more than one lockfile.

## Troubleshooting

If PostgreSQL port is in use:

```sh
npm run dev:stop
```

`dev:stop` will report whether port `5432` is free after shutting down services.

If a stale Rails PID blocks startup:

```sh
rm -f tmp/pids/server.pid
```

If an Inertia page is blank and the browser console says the page `is not listed`, add it to the `pages` list in `app/javascript/entrypoints/site.jsx`.
