import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import * as yup from "yup";
import { addBulletinList, getBulletinList } from '../shared/bulletinList';
import { addRequestList, getRequestList } from '../shared/requestList';

export default function CreateRequest({ navigation, route, params, setModalOpen }) {
  const {name, phone, postal, unit} = params;

  function createRequestObject(favorDescription) {
    let randomId = Math.floor(Math.random() * 10000);

    return {
      id: randomId,
      name: name,
      phone: phone,
      postal: postal,
      unit: unit,
      description: favorDescription
    }
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{description: ""}}
        // validationSchema={registerSchema}
        onSubmit={
          // store data in db 
          (values) => { 
            console.log("values", values);
            let favor = createRequestObject(values.description);
            console.log(favor);
            addBulletinList(favor);
            addRequestList(favor);
            console.log(getBulletinList());
            console.log("request list below")
            console.log(getRequestList());
            setModalOpen(false);
          }
        }
      >
        {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
          <View>
            {/* Description */}
            <Text>Description</Text>
            <TextInput 
              placeholder="Description"
              onChangeText={handleChange("description")}
              value={values.description}
              onBlur={handleBlur("description")}
            />
            <Text>{touched.description && errors.description}</Text>

            {/* Quantity
            <Text>Quantity</Text>
            <TextInput 
              placeholder="Quantity"
              onChangeText={handleChange("quantity")}
              value={values.quantity}
              keyboardType="numeric"
              onBlur={handleBlur("quantity")}
            />
            <Text>{touched.quantity && errors.quantity}</Text> */}

            <Button title="Create Favor" onPress={handleSubmit}/>
          </View>
        )}

      </Formik>
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