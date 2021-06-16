import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { addAcceptList, getAcceptList } from '../shared/acceptList';
import { removeBulletinList } from '../shared/bulletinList';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function FavorDetails({navigation, route}) {
  let favorDetails = route.params.favorDetails;
  return (
    <View style={styles.container}>
      {navigation.setOptions({ title: favorDetails.title })}

      <ScrollView>
        <Text style={styles.headerText}>Description</Text>
        <View style={styles.detailsContainer}>
          <Text>{favorDetails.description}</Text>
        </View>

        <Text style={styles.headerText}>Tip</Text>
        <View style={styles.detailsContainer}>
          <Text>${favorDetails.tip}</Text>
        </View>

        <View style={styles.particulars}>
          <View style={styles.circle}>
            <Ionicons name={"person"} size={60} color={"white"} />
          </View>
          <Text style={styles.name}>{favorDetails.name}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => {
              navigation.navigate("Bulletin")
            }}>
              <Ionicons name={"close-circle"} size={60} color={"#F0A79C"} />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => {
              removeBulletinList(favorDetails);
              favorDetails.status = true;
              addAcceptList(favorDetails);
              navigation.navigate("Bulletin")
            }}>
              <Ionicons name={"checkmark-circle"} size={60} color={"#A7E5CB"} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFD',
    paddingHorizontal: 30,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  favorTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 16,
  },
  detailsContainer: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    backgroundColor : "#fff",
    marginTop: 8,
    marginBottom: 20,
    padding: 20,
    borderRadius: 25,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 20,
  }, 
  particulars: {
    marginTop: 30,
    marginBottom: 10,
    alignItems: "center",
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: "#ABABAB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  }
});