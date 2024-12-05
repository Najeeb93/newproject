import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";

//Form Validation
import * as Yup from 'yup'

const passwordSchema = Yup.object().shape({
  paswordLength: Yup.number()
  .min(4,'Should be min of 4 characters')
  .max(16, 'Should be max of 16 characters')
  .required('Length is requird')
})


export default function App() {

  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPasswGenerated] = useState(false)
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})