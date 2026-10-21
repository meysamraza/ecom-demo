# ecom-demo

A minimal Express product-list demo with no database, authentication, cookies, forms, or file uploads.

## Run locally

```sh
npm ci
npm start
```

The server listens on `0.0.0.0` and uses `PORT` when set, defaulting to port 3000.

## Endpoints

- `GET /` serves the static product page.
- `GET /api/products` returns six hardcoded products as JSON.
- `GET /health` returns `{"status":"ok"}`.

## Deployment

`buildspec.yml` runs gitleaks, Semgrep, and Trivy checks in AWS CodeBuild. `appspec.yml` and `deploy/` provide CodeDeploy hooks for an EC2 deployment managed by pm2.
