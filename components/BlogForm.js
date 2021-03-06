import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

const BlogForm = ({onSubmit, initialValues}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
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
        title="Save"
        onPress={() => {
          onSubmit(title, content);
        }}
      />
    </View>
  );
};
BlogForm.defaultProps = {
  initialValues: {title: '', content: ''},
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

export default BlogForm;
