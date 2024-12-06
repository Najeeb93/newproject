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

  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePasswordString =(passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if(upperCase) {
      characterList += upperCase
    }
    if(lowerCase) {
      characterList += lowerCase
    }
    if(numbers) {
      characterList += numbers
    }
    if(symbols) {
      characterList += symbols
    }

    const passwordResult = createPassword(characterList, passwordLength)
  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = ''
    for(let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }
    return result
  }
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})