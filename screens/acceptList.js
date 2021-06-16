import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { getAcceptList, removeAcceptList } from '../shared/acceptList';
import { useIsFocused } from '@react-navigation/native';
import { removeRequestList } from '../shared/requestList';
import { removeId } from '../shared/idList';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AcceptList({navigation}) {
  const [trigger, setTrigger] = useState(false);
  let acceptList = getAcceptList();
  const isFocused = useIsFocused();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accepted Favours</Text>
      <ScrollView>
        {isFocused ? 
        (<FlatList 
          data={acceptList}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            // <View style={styles.itemContainer}>
            //   <Text>{item.name}</Text>
            //   <Text>{item.phone}</Text>
            //   <Text>{item.description}</Text>

            //   <TouchableOpacity 
            //     style={styles.button}
            //     onPress={() => {
                  // removeAcceptList(item);
                  // removeRequestList(item);
                  // removeId(item.id);
                  // setTrigger(!trigger);
            //     }}>
            //     <Text>Complete</Text>
            //   </TouchableOpacity>
            // </View>

            <View style={styles.favorContainer}>
              <View style={styles.containerLeft}>
                <Text style={styles.favorTitle}>{item.title}</Text>
                <Text style={styles.favorTip}>Tip:</Text>
                <Text style={styles.favorTip}>${item.tip}</Text>
                <Text style={styles.favorDescription}>Description:</Text>
                <Text>{item.description}</Text>
              </View>

              <View style={styles.containerRight}>
                <TouchableOpacity 
                  style={styles.favorArrow}
                  onPress={() => {
                    removeAcceptList(item);
                    removeRequestList(item);
                    removeId(item.id);
                    setTrigger(!trigger);
                  }}>
                  <Ionicons name={"checkmark-circle"} size={40} color={"#A7E5CB"} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />)
        : <FlatList />}
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFD',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  favorContainer: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    backgroundColor : "#fff",
    marginVertical: 8,
    padding: 20,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  containerLeft: {

  },
  containerRight: {
    alignSelf: "center"
  },
  favorTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  favorTip: {

  },
  favorDescription: {
    marginTop: 20,
  },
  favorArrow: {

  },
});