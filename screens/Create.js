import React, {useContext, useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

import {Context} from '../context/BlogContext';

const Create = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const {addPost} = useContext(Context);

  return (
    <View>
      <Text style={styles.label}> Enter Title: </Text>
      <TextInput
        style={styles.inpput}
        value={title}
        onChangeText={text => setTitle(text)}
      />

      <Text style={styles.label}> Enter Content: </Text>
      <TextInput
        style={styles.inpput}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button
        title="Add Post"
        onPress={() => {
          addPost(title, content);
          navigation.navigate('Index');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inpput: {
    fontSize: 18,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default Create;
