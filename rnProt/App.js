/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Text,
  TextInput,
  Button,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const Item = ({content}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const App: () => React$Node = () => {
  const [items, setItems] = useState([]);
  const [value, onChangeText] = useState('Add new item');

  useEffect(() => {
    setItems([{id: '1', content: 'Milk'}, {id: '2', content: 'Eggs'}]);
  }, []);

  const submitItem = () => {
    const newId = (items.length + 1).toString();
    const newItem = {id: newId, content: value};
    setItems([...items, newItem]);
  };

  const removeItem = id => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={items}
          renderItem={({item}) => (
            <TouchableNativeFeedback onPress={() => removeItem(item.id)}>
              <Item content={item.content} />
            </TouchableNativeFeedback>
          )}
          keyExtractor={item => item.id}
        />
        <TextInput onChangeText={text => onChangeText(text)} value={value} />
        <Button title="Add item" onPress={() => submitItem()} />
      </SafeAreaView>
    </>
  );
};

const Placeholder = () => {
  return (
    <>
      <Text>Placeholder page</Text>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 10,
    fontSize: 28,
    backgroundColor: 'powderblue',
  },
  item: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

const navigator = createDrawerNavigator(
  {
    Home: App,
    Placeholder,
  },
  {
    //options here
  },
);

export default createAppContainer(navigator);
