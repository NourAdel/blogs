import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconplus from 'react-native-vector-icons/Entypo';

import {Context as BlogContext} from '../context/BlogContext';

const BlogsIndex = ({navigation}) => {
  const {state, deletePost} = useContext(BlogContext);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={post => post.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', {id: item.id})}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deletePost(item.id)}>
                  <Icon style={styles.icon} name="delete" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
BlogsIndex.navigationOptions = ({navigation}) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Iconplus style={{fontSize: 30, marginRight: 15}} name="add-to-list" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'grey',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default BlogsIndex;
