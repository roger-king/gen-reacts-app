import * as React from 'react';
import { pushStateLocationPlugin, UIRouterReact } from '@uirouter/react';
// Import Application Containers

// Register application state.

export const plugins = [
  pushStateLocationPlugin
];

export const config = (router: UIRouterReact) => {
  // Hook for if route is not registered.
  router.urlRouter.otherwise('/');

  // router.transitionService.onBefore(reqAuthHook.criteria, reqAuthHook.callback, {priority: 10});
};
