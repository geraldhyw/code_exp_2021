import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Formik } from 'formik';
import * as yup from "yup";

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
      .max(6),
  unit: yup.string()
      .required()
})


export default function RegisterPage(props) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Sign Up</Text>
        <Text style={styles.headerDescription}>Help us get to know you better</Text>
        <Formik
          initialValues={{name: "", phone: "", postal: "", unit: ""}}
          validationSchema={registerSchema}
          onSubmit={
            // store data in db 
            (values) => { 
              console.log(values);
              props.setParticulars(values);
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
                style={styles.inputContainer}
              />
              <Text>{touched.name && errors.name}</Text>

              {/* Phone */}
              <TextInput 
                placeholder="Phone"
                onChangeText={handleChange("phone")}
                value={values.phone}
                keyboardType="numeric"
                onBlur={handleBlur("phone")}
                style={styles.inputContainer}
              />
              <Text>{touched.phone && errors.phone}</Text>

              {/* Postal Code */}
              <TextInput 
                placeholder="Postal Code"
                onChangeText={handleChange("postal")}
                value={values.postal}
                keyboardType="numeric"
                onBlur={handleBlur("postal")}
                style={styles.inputContainer}
              />
              <Text>{touched.postal && errors.postal}</Text>

              {/* Unit No. */}
              <TextInput 
                placeholder="Unit No."
                onChangeText={handleChange("unit")}
                value={values.unit}
                onBlur={handleBlur("unit")}
                style={styles.inputContainer}
              />
              <Text>{touched.unit && errors.unit}</Text>

              <TouchableOpacity
                onPress={handleSubmit}
                style={styles.button}>
                <Text style={styles.buttonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          )}

        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFD',
    paddingHorizontal: 30,
    paddingVertical: "30%",
    // alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 36,
  }, 
  headerDescription: {
    paddingVertical: 20,
    marginBottom: 50,
    fontSize: 16,
  }, 
  inputContainer: {
    borderRadius: 30,
    height: 60,
    marginBottom: 5,
    paddingHorizontal: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    backgroundColor : "#fff"
  }, 
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    height: 60,
    marginTop: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    backgroundColor : "#7041EE"
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  }
});
