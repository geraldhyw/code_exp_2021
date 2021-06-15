import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { getBulletinList } from '../shared/bulletinList';

export default function BulletinPage({navigation, route}) {
  const [favors, setFavors] = useState(getBulletinList());
  const {name, phone, postal} = route.params;

  function removeFavors(favor) {
    favors.splice(favors.filter(checkPostal).indexOf(favor), 1);
    console.log(favors.length)
    if (favors.length === 0) {
      setFavors([]);
    } else {
      setFavors(favors.filter(checkPostal));
    }
  }

  function checkPostal(favor) {
    return favor.postal == postal;
  }

  return (
    <View style={styles.container}>
      <Text>Bulletin</Text>
      <FlatList 
        data={favors.filter(checkPostal)}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.favorContainer}>
            <Text>{item.name}</Text>
            <Text>{item.phone}</Text>
            {item.items.map((favor) => (
              <View key={favor.title}>
                <Text>{favor.title}</Text>
                <Text>{favor.quantity}</Text>
              </View>
            ))}
            <TouchableOpacity 
              style={styles.button}
              onPress={() => {
                navigation.navigate("Favour Details", {
                  favorDetails: item,
                  removeFavors: removeFavors
                });
              }}>
              <Text>See More</Text>
            </TouchableOpacity>
          </View>
        )}
      />
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