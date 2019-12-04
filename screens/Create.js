import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';

import {Context} from '../context/BlogContext';
import BlogForm from '../components/BlogForm';

const Create = ({navigation}) => {
  const {addPost} = useContext(Context);

  return (
    <BlogForm
      onSubmit={(title, content) => {
        addPost(title, content);
        navigation.navigate('Index');
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default Create;
