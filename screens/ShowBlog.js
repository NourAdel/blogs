import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import {Context} from '../context/BlogContext';

const ShowBlog = ({navigation}) => {
  const {state} = useContext(Context);

  const post = state.find(post => post.id === navigation.getParam('id'));

  return (
    <View>
      <Text>{post.title}</Text>
      <Text>{post.content}</Text>
    </View>
  );
};

ShowBlog.navigationOptions = ({navigation}) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', {id: navigation.getParam('id')})
        }>
        <Icon style={{fontSize: 26, marginRight: 15}} name="edit" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});

export default ShowBlog;
