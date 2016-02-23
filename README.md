# React-Redux-Foundation

Make sure you have Node.js installed.

```sh
# Check version.
$ node -v
```

If version is lower than v5.3, please upgrade. You can grab the latest stable
version from here

https://nodejs.org/en/

or install through your favorite package manager.

## Dependencies

```sh
# Install webpack globally.
$ npm install -g webpack webpack-dev-server
````

## Installation

```sh
# Install packages
$ npm install
```

## Building

Using webpack there are to configurations, devevlopment and production.

```sh
# Development build
$ npm run build 

# or
$ npm run build:dev

# Production build
$ npm run build:dev
```

By default the locale will be set to 'en-US'. To build for a different locale run.

```
# Use dev or prod
$ npm run build -- --locale=en-US
```

## Developing

Local development is currently using the webpack dev server.

```sh
# Start webpack-dev-server development build.
$ npm start

# or
$ npm run start:dev
```

It is also possible to start the dev server using the production build.

```sh
# Dev server with production build
$ npm run start:prod
```


