import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import * as yup from "yup";

// can do login page + authentication page if got time

// const registerSchema = yup.object({
//   name: yup.string()
//       .required(),
//   phone: yup.string()
//       .required()
//       .min(8)
//       .max(8),
//   postal: yup.string()
//       .required()
//       .min(6)
//       .max(6)
// })


export default function RegisterPage(props) {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{name: "", phone: "", postal: ""}}
        // validationSchema={registerSchema}
        onSubmit={
          // store data in db 
          () => { 
            props.setLoggedIn(true);
            console.log("completed");
          }
        }
      >
        {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
          <View>
            {/* Name */}
            <TextInput 
              placeholder="Name"
              onChangeText={handleChange("name")}
              value={values.name}
              onBlur={handleBlur("name")}
            />
            <Text>{touched.name && errors.name}</Text>

            {/* Phone */}
            <TextInput 
              placeholder="Phone"
              onChangeText={handleChange("phone")}
              value={values.phone}
              keyboardType="numeric"
              onBlur={handleBlur("phone")}
            />
            <Text>{touched.phone && errors.phone}</Text>

            {/* Postal Code */}
            <TextInput 
              placeholder="Postal Code"
              onChangeText={handleChange("postal")}
              value={values.postal}
              keyboardType="numeric"
              onBlur={handleBlur("postal")}
            />
            <Text>{touched.postal && errors.postal}</Text>

            <Button title="Register" onPress={handleSubmit}/>
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
