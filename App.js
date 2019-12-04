import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import {Provider as BlogProvider} from './context/BlogContext';
import BlogIndex from './screens/BlogsIndex';
import ShowBlog from './screens/ShowBlog';
import Create from './screens/Create';
import Edit from './screens/Edit';

const navigator = createStackNavigator(
  {
    Index: BlogIndex,
    Show: ShowBlog,
    Create: Create,
    Edit: Edit,
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
