import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { getRequestList } from '../shared/requestList';
import { useIsFocused } from '@react-navigation/native';
import { MaterialIcons } from "@expo/vector-icons";
import CreateRequest from './createRequest';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RequestList({ navigation, route }) {
  let requestList = getRequestList();
  const isFocused = useIsFocused();
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Requested Favours</Text>
      {isFocused ? 
      (<FlatList 
        data={requestList}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.favorContainer}>
            <View style={styles.containerLeft}>
              <Text style={styles.favorTitle}>{item.title}</Text>
              <Text style={styles.favorTip}>Tip:</Text>
              <Text>${item.tip}</Text>
              <Text style={styles.favorDescription}>Description:</Text>
              <Text>{item.description}</Text>
            </View>

            <View style={styles.containerRight}>
              {item.status ? (
                <View 
                  style={styles.favorArrow}>
                  <Ionicons name={"checkmark-circle"} size={40} color={"#A7E5CB"} />
                  <Text>Accepted</Text>
                </View>
              ) : (
                <View 
                  style={styles.favorArrow}>
                  <Ionicons name={"close-circle"} size={40} color={"#F0A79C"} />
                  <Text>Pending</Text>
                </View>
              )}
            </View>
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
    width: "80%",
  },
  containerRight: {
    alignSelf: "center",
  },
  favorTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  favorTip: {
    fontWeight: "bold",
  },
  favorDescription: {
    fontWeight: "bold",
    marginTop: 20,
  },
  favorArrow: {
    alignItems: "center",
  },
});