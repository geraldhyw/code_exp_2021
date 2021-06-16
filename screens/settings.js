import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Settings({route}) {
  const {name, phone, postal, unit} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.particularsContainer}>
        <View style={styles.circle}>
          <Ionicons name={"person"} size={60} color={"white"} />
        </View>
        <View style={styles.particulars}>
          <Text style={styles.name}>{name}</Text>
          <Text style={{fontWeight:"bold", marginTop: 5}}>Phone:</Text>
          <Text style={{fontSize:12}}>{phone}</Text>
          <Text style={{fontWeight:"bold", marginTop: 5}}>Postal:</Text>
          <Text style={{fontSize:12}}>{postal}</Text>
          <Text style={{fontWeight:"bold", marginTop: 5}}>Unit No:</Text>
          <Text style={{fontSize:12}}>{unit}</Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Text style={{fontWeight: "bold"}}>
          Preferred Payment:
        </Text> 
        <Text>Cash/Paylah</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={{fontWeight: "bold"}}>
          Preferred Mode of Delivery:
        </Text> 
        <Text>Contactless Delivery</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFD',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  particularsContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    backgroundColor : "#fff",
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 20,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  itemContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    backgroundColor : "#fff",
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 20,
    borderRadius: 25,
  },
  circle: {
    width: 124,
    height: 124,
    borderRadius: 62,
    backgroundColor: "#ACACAC",
    justifyContent: "center",
    alignItems: "center"
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
  },
  particulars: {
    paddingLeft: 20,
    flexDirection: "column",
    justifyContent: "center"
  }
});