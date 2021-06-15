import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { addAcceptList, getAcceptList } from '../shared/acceptList';
import { removeBulletinList } from '../shared/bulletinList';

export default function FavorDetails({navigation, route}) {
  let favorDetails = route.params.favorDetails;
  return (
    <View style={styles.container}>
      <Text>{favorDetails.name}</Text>
      <Text>{favorDetails.phone}</Text>
      <Text>{favorDetails.description}</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => {
          addAcceptList(favorDetails);
          removeBulletinList(favorDetails);
          navigation.navigate("Bulletin")
        }}>
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