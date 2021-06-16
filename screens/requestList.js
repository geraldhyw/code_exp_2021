import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { getRequestList } from '../shared/requestList';
import { useIsFocused } from '@react-navigation/native';
import { MaterialIcons } from "@expo/vector-icons";
import CreateRequest from './createRequest';

export default function RequestList({ navigation, route }) {
  const [modalOpen, setModalOpen] = useState(false);
  let requestList = getRequestList();
  const isFocused = useIsFocused();
  return (
    <View style={styles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons 
                name="close"
                size={24}
                style={styles.modalIcon}
                onPress={() => setModalOpen(false)}
            />
            <CreateRequest params={route.params} setModalOpen={setModalOpen}/>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {isFocused ? 
      (<FlatList 
        style={styles.listContent}
        data={requestList}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.phone}</Text>
            <Text>{item.description}</Text>


          </View>
        )}
      />)
      : <FlatList />}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => {
          setModalOpen(true);
        }}>
        <Text>Create New Favor</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalIcon: {
    padding: 40,
  },
  modalContent: {
    flex: 1,
  }, 
  listContent: {
    flex: 1,
    backgroundColor: "red"
  }
});