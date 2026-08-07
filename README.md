# Welcome to my online resume

## Requirements

Node 20 (see `.nvmrc`). The working range is currently `>=20.19 <23`: below that
`eslint-plugin-vue` fails to install, above it Vue CLI does.

```
nvm use
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
