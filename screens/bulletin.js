import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function BulletinPage({navigation}) {
  const [favors, setFavors] = useState([
    {
      id: 1,
      name: "Amy",
      phone: "98765432",
      postal: "123456",
      unit: "05-05",
      items: [{
        title: "HL Milk 1L",
        quantity: "2"
      }]
    },
    {
      id: 2,
      name: "Ben",
      phone: "98769876",
      postal: "234567",
      unit: "06-06",
      items: [{
        title: "Eggs (10)",
        quantity: "1"
      }]
    },
    {
      id: 3,
      name: "Carl",
      phone: "98989898",
      postal: "345678",
      unit: "07-07",
      items: [{
        title: "Green Tea (6 Cans)",
        quantity: "1"
      }]
    },
  ])
  return (
    <View style={styles.container}>
      <Text>Bulletin</Text>
      <FlatList 
        data={favors}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.favorContainer}>
            <Text>{item.name}</Text>
            <Text>{item.phone}</Text>
            {item.items.map((favor) => (
              <View key="favor.title">
                <Text>{favor.title}</Text>
                <Text>{favor.quantity}</Text>
              </View>
            ))}
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