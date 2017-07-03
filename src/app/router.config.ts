import * as React from 'react';
import {pushStateLocationPlugin} from '@uirouter/react';
import { Home } from './containers';

export const states = [ Home ];

export const plugins = [
  pushStateLocationPlugin
];
