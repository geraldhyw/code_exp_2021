import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, 
TouchableWithoutFeedback, Keyboard, Modal } from 'react-native';
import { getBulletinList } from '../shared/bulletinList';
import { useIsFocused } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreateRequest from './createRequest';

export default function BulletinPage({navigation, route}) {
  
  const {name, phone, postal, unit} = route.params;
  const [modalOpen, setModalOpen] = useState(false);

  function checkPostal(favor) {
    return favor.postal == postal;
  }

  // Check user for actual application, but not for demo purposes
  function checkUser(favor) {
    return favor.phone != phone;
  }

  // let favors = getBulletinList().filter(checkPostal).filter(checkUser);
  let favors = getBulletinList().filter(checkPostal);
  const isFocused = useIsFocused();

  return (
    <View style={styles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <CreateRequest params={route.params} setModalOpen={setModalOpen}/>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {isFocused ? 
      (<FlatList 
        data={favors.filter(checkPostal)}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.favorContainer}>
            <View style={styles.containerLeft}>
              <Text style={styles.favorTitle}>{item.title}</Text>
              <Text style={styles.favorTip}>Tip: ${item.tip}</Text>
            </View>

            <View style={styles.containerRight}>
              <TouchableOpacity 
                style={styles.favorArrow}
                onPress={() => {
                  navigation.navigate("Favour Details", {
                    favorDetails: item
                  });
                }}>
                <Ionicons name={"arrow-forward"} size={32} color={"#ABABAB"} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />):<FlatList />}
      <View style={styles.bottomContainer}>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              setModalOpen(true);
            }}>
            <Ionicons name={"add"} size={32} color={"#BDBFC0"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFD',
    // alignItems: 'center',
    justifyContent: 'center',
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
    marginHorizontal: 30,
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
  favorArrow: {

  },
  bottomContainer: {
    alignItems: "center"
  },
  addButtonContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#E0E6EC",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  modalContent: {
    flex: 1,
  }, 
});