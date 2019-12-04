import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';

import {Context} from '../context/BlogContext';
import BlogForm from '../components/BlogForm';

const Edit = ({navigation}) => {
  const {state, editPost} = useContext(Context);
  const post = state.find(post => post.id === navigation.getParam('id'));

  return (
    <BlogForm
      initialValues={{title: post.title, content: post.content}}
      onSubmit={(title, content) => {
        editPost(post.id, title, content);
        navigation.navigate('Show', {id: post.id});
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default Edit;
