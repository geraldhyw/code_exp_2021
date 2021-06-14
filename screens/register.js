import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import * as yup from "yup";

// can do login page + authentication page if got time

const registerSchema = yup.object({
  name: yup.string()
      .required(),
  phone: yup.string()
      .required()
      .min(8)
      .max(8),
  postal: yup.string()
      .required()
      .min(6)
      .max(6)
})

export default function RegisterPage() {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{name: "", phone: "", postal: ""}}
        validationSchema={registerSchema}
        onSubmit={
          // store data in db 
          values => console.log(values)
        }
      >
        {props => (
          <View>
            {/* Name */}
            <TextInput 
              placeholder="Name"
              onChangeText={props.handleChange("name")}
              value={props.values.name}
              onBlur={props.handleBlur("name")}
            />
            <Text>{props.touched.name && props.errors.name}</Text>

            {/* Phone */}
            <TextInput 
              placeholder="Phone"
              onChangeText={props.handleChange("phone")}
              value={props.values.phone}
              keyboardType="numeric"
              onBlur={props.handleBlur("phone")}
            />
            <Text>{props.touched.phone && props.errors.phone}</Text>

            {/* Postal Code */}
            <TextInput 
              placeholder="Postal Code"
              onChangeText={props.handleChange("postal")}
              value={props.values.postal}
              keyboardType="numeric"
              onBlur={props.handleBlur("postal")}
            />
            <Text>{props.touched.postal && props.errors.postal}</Text>

            <Button title="Register" onPress={props.handleSubmit}/>
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
