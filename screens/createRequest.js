import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import * as yup from "yup";
import { addBulletinList, getBulletinList } from '../shared/bulletinList';
import { addRequestList, getRequestList } from '../shared/requestList';
import { generateId } from '../shared/idList';

const createFavorSchema = yup.object({
  description: yup.string()
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
            <Text>Title</Text>
            <TextInput 
              placeholder="Title"
              onChangeText={handleChange("title")}
              value={values.title}
              onBlur={handleBlur("title")}
            />
            <Text>{touched.title && errors.title}</Text>

            {/* Description */}
            <Text>Description</Text>
            <TextInput 
              multiline
              // placeholder="Description"
              onChangeText={handleChange("description")}
              value={values.description}
              onBlur={handleBlur("description")}
            />
            <Text>{touched.description && errors.description}</Text>

            {/* Tip */}
            <Text>Tip</Text>
            <TextInput 
              keyboardType="numeric"
              placeholder="Tip"
              onChangeText={handleChange("tip")}
              value={values.tip}
              onBlur={handleBlur("tip")}
            />
            <Text>{touched.tip && errors.tip}</Text>

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
    backgroundColor: '#FAFBFD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});