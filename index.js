/**
 * @format
 */
import React, { useState } from 'react';
import {
  AppRegistry,
} from 'react-native';
import {Home} from './src/pages/Home'
import { name as appName } from './app.json';
const Todo = () => {
  return (
    <Home/>
  );
};

AppRegistry.registerComponent(appName, () => Todo);
