import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function FavorDetails({route}) {
  let favorDetails = route.params.favorDetails;
  return (
    <View style={styles.container}>
      <Text>{favorDetails.name}</Text>
      <Text>{favorDetails.phone}</Text>
      {favorDetails.items.map((favor) => (
        <View key="favor.title">
          <Text>{favor.title}</Text>
          <Text>{favor.quantity}</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.button}>
        <Text>Accept Favor</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "green",
  }
});