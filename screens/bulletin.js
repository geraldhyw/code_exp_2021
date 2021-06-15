import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { getBulletinList } from '../shared/bulletinList';
import { useIsFocused } from '@react-navigation/native';

export default function BulletinPage({navigation, route}) {
  
  const {name, phone, postal, unit} = route.params;
  function checkPostal(favor) {
    return favor.postal == postal;
  }

  let favors = getBulletinList().filter(checkPostal);
  const isFocused = useIsFocused();

  return (
    <View style={styles.container}>
      <Text>Bulletin</Text>
      {isFocused ? 
      (<FlatList 
        data={favors.filter(checkPostal)}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.favorContainer}>
            <Text>{item.name}</Text>
            <Text>{item.phone}</Text>
            <Text>{item.description}</Text>
            {/* {item.items.map((favor) => (
              <View key={favor.title}>
                <Text>{favor.title}</Text>
                <Text>{favor.quantity}</Text>
              </View>
            ))} */}
            <TouchableOpacity 
              style={styles.button}
              onPress={() => {
                navigation.navigate("Favour Details", {
                  favorDetails: item
                });
              }}>
              <Text>See More</Text>
            </TouchableOpacity>
          </View>
        )}
      />):<FlatList />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  favorContainer: {
    backgroundColor: "grey",
    padding: 10,
    margin: 5,
  },
  button: {
    backgroundColor: "green",
  }
});