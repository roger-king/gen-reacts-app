<div align="center">
    <img width="200" height="200" src="public/images/react_modern_seed.png"/>
    <h1>ReactJS Project Seed</h1>
    <p>
        React.js modern seed is a frontend full suite solution. It aims to provide you a streamline process from development to production!
    </p>
</div>
<div align="center">
    <h2>Prerequistes</h2>
    <ul>
        <li>npm v5.0^</li>
    </ul>
    <h2>Getting Started</h2>
    ```
        // Install node_modules
        npm install

        // Init Project space.
        npm run generate:init

        // Remove .git
        rm -rf .git

        // Run in development mode
        npm run start:dev
    ```
</div>
<div align="center">
    <h2>Concepts</h2>
    <p>
        I provide a full toolbox of technologies for you to use.
    </p>
</div>
|Name|Description|
|:--:|:----------|
|ant design|css react framework|
|tslint|linting tool for typescript|
|karma|test runner for mocha (test framework)|
|mocha/chai/enzyme|test framework to do our testing of our components and services|
|plop|templated automation to get rid of the react boilerplates|
|webpack|bundling and compiling of our typescript|
|mobx|state management|
|typescript|superset language for strict typing of our javascript|

<div align="center">
    <h2>Project Structure</h2>
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
└── karma.conf.js - karma runner config.
└── mocha.opts - mocha options.
└── tslint.json - linting config.
└── gulpfile.js - gulp task runner file
└── webpack.config.js - base webpack bundler.
└── tsconfig.json - typescript config.
└── package-lock.json - package management.
└── package.json
```
    <p>
        React.js is a very opinated framework. It has many modules/libraries that can overwhelm the user and cause your codebase to become messy.
        I try to avoid that here by sticking to core react.js and mobx libraries.
    </p>
</div>

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

    // Be sure you are using npm version 5.0.1^
    npm install
    npm run start:dev
```

#### Create Production Build:
```
    cd web
    npm run build:dist
```

# Resources:
- [Mobx](https://mobx.js.org/intro/overview.html)

# TODO:
- [ ] Dynamic react routing.