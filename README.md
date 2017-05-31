![Seed Logo](public/images/react_modern_seed.png)
# ReactJS Project Seed

## About:
A react.js frontend web seed.

This is a bare bones setup with a todo application example.

## Core Libraries used:
1. React.js - view library
2. Mobx - state management
3. Jest - test library
4. TypeScript - SuperSet Javascript language
5. Gulp - task runner
6. Webpack - Javascript bundler
6. Yarn - library management.
7. Bootstrap - base CSS framework.

## Project Structure:
```
.
└── config
|   └── default.json - development configuration
|
└── src
|   └── app - application code.
|   |   └── components - Commonly used modules throughout your application.
|   |   |   └── index.ts - A single entry point for exporting your components for easy importing.
|   |   └── containers - Entry points for each route. Containers are built by your different components.
|   |   |   └── index.ts - A single entry point for exporting your containers for easy importing.
|   |   └── services - Service layer of the application containing reusable services and stores (mobx).
|   |   |   └── index.ts - A single entry point for exporting your services for easy importing.
|   |   └── app.constants.ts - a single file for global application constants (i.e api url)
|   |   └── app.scss - Sass file for global application styling.
|   |   └── app.tsx - Main application tsx file (contains Authentication module)
|   |   └── routes.tsx - A single file to contain all routes.
|   └── index.html - base html file
|   └── index.tsx - the entry point for the application (wrapper to call). Here we set the provider, base entry element, stores, and routing history.
└── tools
|   └── webpack
|   |   └── webpack.dev.config.js - Development webpack bundling config.
|   |   └── webpack.dist.config.js - Production webpack bundling config.
└── .babelrc
└── .eslintrc - linting config.
└── gulpfile.js - gulp task runner file
└── webpack.config.js - base webpack bundler.
└── tsconfig.json - typescript config.
└── yarn.lock - package management.
└── package.json
```

React.js is a very opinated framework. It has many modules/libraries that can overwhelm the user and cause your codebase to become messy.

I try to avoid that here by sticking to core react.js and mobx libraries.

### Workflow:
I try to keep the methodology of reactjs, which is reusable components.

All of my reusable components would be contained in `src/app/components/<component>`. This allows me to keep my focus on that single component and cleaner importing.

Pages or views are kept inside `src/app/containers/<container>`. Containers are basically what react would consider a "Route's Component". It's what the route endpoint is looking to render. The idea here is that all containers are built by components.

### Workflow Bonuses:
I use gulp to kick start and speed up our development process by having "magic" keyboards or commands that would help us do things like generate components and containers (templated).

## How To:

#### Run Development:
```
    // I like to clone my projects into a "web" folder. Assuming API is in the same project folder.
    git clone https://github.com/roger-king/reactjs-modern-seed.git web
    cd web
    yarn install // be sure yarn is installed.
    npm run dev
```

#### Create Production Build:
```
    cd web
    npm run prod:compile
```

# Resources:
- [Mobx](https://mobx.js.org/intro/overview.html)

# TODO:
- [x] Example unit test with Jest
- [ ] Proper tslint.json
- [ ] Complete automation.