import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Context} from '../context/BlogContext';

const ShowBlog = ({navigation}) => {
  const {state }= useContext(Context);

  const post = state.find(post => post.id === navigation.getParam('id'));
 

  return (
    <View>
      <Text>{post.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowBlog;
