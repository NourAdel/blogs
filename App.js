import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import BlogIndex from './screens/BlogsIndex';
import {BlogProvider} from './context/BlogContext';

const navigator = createStackNavigator(
  {
    Index: BlogIndex,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  },
);
const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
