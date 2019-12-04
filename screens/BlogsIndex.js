import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';

import BlogContext from '../context/BlogContext';

const BlogsIndex = () => {
  const {data, addPost} = useContext(BlogContext);
  return (
    <View>
      <Button title="Add Post" onPress={addPost}/>
      <FlatList
      data={data}
      keyExtractor={(post)=>post.title}
      renderItem={({item})=>{
        return(
        <Text>{item.title}</Text>
        )
      }}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BlogsIndex;
