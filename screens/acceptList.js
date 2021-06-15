import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { getAcceptList, removeAcceptList } from '../shared/acceptList';
import { useIsFocused } from '@react-navigation/native';
import { removeRequestList } from '../shared/requestList';
import { removeId } from '../shared/idList';

export default function AcceptList({navigation}) {
  const [trigger, setTrigger] = useState(false);
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

            <TouchableOpacity 
              style={styles.button}
              onPress={() => {
                removeAcceptList(item);
                removeRequestList(item);
                removeId(item.id);
                setTrigger(!trigger);
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