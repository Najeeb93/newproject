import { StyleSheet, View, Text } from "react-native";
import React from "react";

//Form Validation
import * as Yup from 'yup'

const passwordSchema = Yup.object().shape({
  paswordLength: Yup.number()
})


export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})