# Welcome to my online resume

Vue 3 + Vite + Tailwind CSS.

## Requirements

Node 24 (see `.nvmrc`).

```
nvm use
```

## Project setup
```
yarn install
```

### Starts the dev server
```
yarn dev
```

### Builds for production
```
yarn build
```

### Serves the production build locally
```
yarn preview
```

### Lints
```
yarn lint
```

## Deployment

Pushing to `master` builds and publishes to GitHub Pages automatically, via
`.github/workflows/deploy.yml`. There is nothing to run by hand, and no SSH key
to keep alive on any particular machine — the workflow authenticates with the
repository's own token.

You can also trigger a deploy without pushing, from the Actions tab
("Deploy to GitHub Pages" > Run workflow).

### Configuration
Build config lives in `vite.config.js`. The production `base` is
`/julie-gicquel/`, matching the GitHub Pages project path; everything in the app
resolves against `import.meta.env.BASE_URL` rather than hardcoding it.
