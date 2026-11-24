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

This app uses Vite for frontend builds. Heroku should include Node.js and Ruby buildpacks so `npm` and asset compilation run during deploy.

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
