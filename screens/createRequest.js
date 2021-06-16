import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import * as yup from "yup";
import { addBulletinList, getBulletinList } from '../shared/bulletinList';
import { addRequestList, getRequestList } from '../shared/requestList';
import { generateId } from '../shared/idList';
import Ionicons from 'react-native-vector-icons/Ionicons';

const createFavorSchema = yup.object({
  description: yup.string()
      .required(),
  title: yup.string()
      .max(20)
      .required(),
  tip: yup.string()
      .required()
})

export default function CreateRequest({ navigation, route, params, setModalOpen }) {
  const {name, phone, postal, unit} = params;

  function createRequestObject(favorDescription, favorTitle, favorTip) {
    let randomId = generateId();
    console.log(randomId);

    return {
      id: randomId,
      name: name,
      phone: phone,
      postal: postal,
      unit: unit,
      description: favorDescription,
      title: favorTitle,
      tip: favorTip,
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create a New Offer</Text>
      <Formik
        initialValues={{description: "", title: "", tip: ""}}
        validationSchema={createFavorSchema}
        onSubmit={
          // store data in db 
          (values) => { 
            let favor = createRequestObject(values.description, values.title, values.tip);
            addBulletinList(favor);
            addRequestList(favor);
            setModalOpen(false);
          }
        }
      >
        {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
          <View>
            {/* Title */}
            <Text style={styles.headerText}>Title</Text>
            <TextInput 
              style={styles.detailsContainer}
              placeholder="Insert Brief Title (max 20 characters)"
              placeholderTextColor="#C7C7CD"
              onChangeText={handleChange("title")}
              value={values.title}
              onBlur={handleBlur("title")}
            />
            <Text>{touched.title && errors.title}</Text>

            {/* Description */}
            <Text style={styles.headerText}>Description</Text>
            <TextInput 
              style={styles.descriptionContainer}
              numberOfLines={10}
              multiline
              placeholder="Insert Detailed Description"
              onChangeText={handleChange("description")}
              value={values.description}
              onBlur={handleBlur("description")}
            />
            <Text>{touched.description && errors.description}</Text>

            {/* Tip */}
            <Text style={styles.headerText}>Tip</Text>
            <TextInput 
              style={styles.detailsContainer}
              keyboardType="numeric"
              placeholder="Insert Tip Amount (e.g. 5.00)"
              placeholderTextColor="#C7C7CD"
              onChangeText={handleChange("tip")}
              value={values.tip}
              onBlur={handleBlur("tip")}
            />
            <Text>{touched.tip && errors.tip}</Text>

            {/* <Button title="Create Favor" onPress={handleSubmit}/> */}

            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.button}
                onPress={() => {
                  setModalOpen(false);
                }}>
                  <Ionicons name={"close-circle"} size={60} color={"#F0A79C"} />
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.button}
                onPress={handleSubmit}>
                  <Ionicons name={"checkmark-circle"} size={60} color={"#A7E5CB"} />
              </TouchableOpacity>
            </View>

            
          </View>
        )}

      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFD',
    paddingHorizontal: 30,
  },
  header: {
    marginTop: 55,
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
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
  descriptionContainer: {
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
    paddingTop: 20,
    borderRadius: 25,
    height: "35%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 20,
  }, 
});