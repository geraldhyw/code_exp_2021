import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { getAcceptList } from '../shared/acceptList';
import { useIsFocused } from '@react-navigation/native';

export default function AcceptList({navigation}) {
  let acceptList = getAcceptList();
  const isFocused = useIsFocused();
  return (
    <View style={styles.container}>
      {isFocused ? 
      (<FlatList 
        data={acceptList}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View>
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
                
              }}>
              <Text>Complete</Text>
            </TouchableOpacity>
          </View>
        )}
      />)
      : <FlatList />}
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
});