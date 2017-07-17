import { pushStateLocationPlugin, UIRouterReact } from '@uirouter/react';
import { AppState } from './app.state';
// Import Application Containers

export const states = [AppState];

export const plugins = [
  pushStateLocationPlugin
];

export const config = (router: UIRouterReact) => {
  // Hook for if route is not registered.
  router.urlRouter.otherwise('/');

  // router.transitionService.onBefore(reqAuthHook.criteria, reqAuthHook.callback, {priority: 10});
};
