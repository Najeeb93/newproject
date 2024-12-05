import { StyleSheet, View, Text } from "react-native";
import React from "react";

//Form Validation
import * as Yup from 'yup'

const passwordSchema = Yup.object().shape({
  paswordLength: Yup.number()
  .min(4,'Should be min of 4 characters')
  .max(16, 'Should be max of 16 characters')
  .required('Length is requird')
})


export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})