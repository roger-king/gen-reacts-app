import { servicesPlugin, hashLocationPlugin, UIRouterReact } from '@uirouter/react';
import { containers } from './containers';

export const states = [].concat(containers);

export const plugins = [
  hashLocationPlugin,
  servicesPlugin
];

export const config = (router: UIRouterReact) => {
  // Hook for if route is not registered.
  router.urlRouter.otherwise('/');

  // router.transitionService.onBefore(reqAuthHook.criteria, reqAuthHook.callback, {priority: 10});
};
