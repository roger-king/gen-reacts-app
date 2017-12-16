[![npm][npm]][npm-url]
[![Dependencies][deps]][deps-url]
[![travis]]

<div align="center">
    <h1>React-Typescript-Gen</h1>
    <p>
        React-Typescript-Gen is a frontend full suite solution. It aims to provide you a streamline process from development to production!
    </p>
</div>
<h2 align="center">Introduction</h2>
<p>
React-Typescript-Gen is my approach to tackling a react.js application. The main goal of this project is to bring a structure to a very open platform for developing a react.js application. I use many modern day (to date) tools to help streamline develop processes.
</p>
<ul>
    <li> Strict typing </li>
    <li> Automation with templates to remove the need for rewriting react boilerplate </li>
    <li> Frontend unit testing </li>
    <li> Linting! </li>
    <li> Modular bundling </li>
</ul>

<div align="center">
    <h2>Getting Started</h2>
</div>

```
// Install node_modules
yarn install

// Run in development mode
yarn run start:dev

```
    
<h2 align="center">Concepts</h2>

<p>
    I provide a full toolbox of technologies for you to use. This would hopefully help you develop faster and better code.
</p>

|Name|Description|
|:--:| :----------:|
|typescript| superset language for strict typing of our javascript|
|webpack| bundling and compiling of our typescript|
|redux| state management|
|react-router| router|
|postcss| css processor|
|tslint| linting tool for typescript|
|jest| component based unit testing|
|plop| templated automation to get rid of the react boilerplates|

<h2 align="center">Project Structure</h2>
<p>
    React.js is a very opinated framework. It has many modules/libraries that can overwhelm the user and cause your codebase to become messy.
    I try to avoid that here by sticking to core react.js and mobx libraries.
</p>

```
.
└── config
|   └── default.json - development configuration
|
└── src
|   └── app - application code.
|   |   └── components - Commonly used modules throughout your application.
|   |   |   └── index.ts - A single entry point for exporting your components for easy importing.
|   |   └── containers - Entry points for each route. Containers are built from your components and access your mobx stores.
|   |   |   └── index.ts - A single entry point for exporting your containers for easy importing.
|   |   └── services - Service layer of the application containing reusable services and stores (redux).
|   |   |   └── index.ts - A single entry point for exporting your services for easy importing.
|   |   └── utils - Utility folder.
|   |   └── app.constants.ts - a single file for global application constants (i.e api url)
|   |   └── app.css - Sass file for global application styling.
|   |   └── app.tsx - Main application tsx file (contains Authentication module)
|   |   └── app.router.ts - A single file to contain all routes.
|   |   └── app.store.ts - Create redux store.
|   └── index.tsx - the entry point for the application (wrapper to call). Here we set the provider, base entry element, stores, and routing history.
└── build
|   └── generator - plop generator scripts.
|   └── webpack.dev.config.js - Development webpack bundling config.
|   └── webpack.dist.config.js - Production webpack bundling config.
└── tslint.json - linting config.
└── tsconfig.json - typescript config.
└── yarn.lock - package management.
└── package.json
```

### Workflow:
I try to keep the methodology of reactjs, which is reusable components.

All of my reusable components would be contained in `src/app/components/<component>`. This allows me to keep my focus on that single component and cleaner importing.

Pages or views are kept inside `src/app/containers/<container>`. Containers are basically what react would consider a "Route's Component". It's what the route endpoint is looking to render. The idea here is that all containers are built by components.

### Workflow Bonuses:
I use gulp to kick start and speed up our development process by having "magic" keyboards or commands that would help us do things like generate components and containers (templated).

<h2 align="center"> Commands </h2>
<p>
    I use npm's scripts to make for faster development and workflow.
    Here is a list of commands you can run:
</p>

|Command|Action|
|:-----:|:----:|
|start:dev| Start development server|
|test| Run jest unit test|
|test:watch| Start testing in watch mode|
|test:coverage| Run test to generate coverage|
|build:dist| Create dist for production. This will run linting in parallel to consistent formatting|
|gen| List all automated templates to create from|
|gen:component| Create a shared component|
|gen:container| Create a new page or containter|
|gen:service| Create a new service/state store|


# Resources:
- [Redux](https://redux.js.org/)
- [React-Router](https://reacttraining.com/react-router/web/guides/philosophy)
- [Webpack](https://webpack.github.io/docs/)
- [PostCSS](http://postcss.org/)
- [lost grid](https://github.com/peterramsing/lost)
- [Smart vs Dumb Container](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

[npm]: https://img.shields.io/npm/v/npm.svg
[npm-url]: https://nodejs.org/en/download/

[deps]: https://david-dm.org/roger-king/react-typescript-gen.svg
[deps-url]: https://david-dm.org/roger-king/react-typescript-gen

[travis]: https://travis-ci.org/roger-king/react-typescript-gen.svg?branch=demo
