import { StyleSheet, View, Text, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { Formik } from 'formik';
import BouncyCheckbox from "react-native-bouncy-checkbox";

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

    setPassword(passwordResult)
    setIsPasswGenerated(true)
  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = ''
    for(let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }
    return result
  }

  const resetPasswordState = () => {
    setPassword('')
    setIsPasswGenerated(false)
    setLowerCase(true)
    setUpperCase(false)
    setNumbers(false)
    setSymbols(false)
  }
  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
       initialValues={{ passwordLength: ''}}
        validationSchema={passwordSchema}
        onSubmit={values => {
          generatePasswordString(+values.passwordLength)
        }}
        >
       {({
         values,
         errors,
         touched,
         isValid,
         handleChange,
         handleSubmit,
         handleReset,
         /* and other goodies */
       }) => (
         <>
         <View style={styles.inputWrapper}>
          <View style={styles.inputColumn}>
            <Text style={styles.heading}>Password Length</Text>
            {touched.passwordLength && errors.passwordLength && (
              <Text style={styles.errorText}>
                {errors.passwordLength}
              </Text>
            )}
           
            
          </View>
          <TextInput
            style={styles.inputStyle}
            value={values.passwordLength}
            onChangeText={handleChange('passwordLength')}
            placeholder="Ex. 8"
            keyboardType="numeric" />
         </View>
         <View style={styles.inputWrapper}></View>
         <View style={styles.inputWrapper}>
          <Text style={styles.heading}>Include lowercase </Text>
          <BouncyCheckbox
          disableBuiltInState 
          isChecked={lowerCase}
          onPress={() => setLowerCase(!lowerCase)}
          fillColor="#29AB87"
          />
         </View>
         <View style={styles.inputWrapper}>
          <Text style={styles.heading}>Include uppercase letters</Text>
          <BouncyCheckbox 
          disableBuiltState
          isChecked={upperCase}
          onPress={() => setUpperCase(!upperCase)}
          fillColor="#FED85D"
          />
         </View>
         <View style={styles.inputWrapper}>
          <Text style={styles.heading}>Include Numbers</Text>
          <BouncyCheckbox
          disableBuiltInState
          isChecked={numbers}
          onPress={() => setNumbers(!numbers)}
            fillColor="#C9A0DC"
          />
         </View>

         <View style={styles.formActions}>
          <TouchableOpacity>
            <Text>Generate Password</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Reset</Text>
          </TouchableOpacity>
         </View>
         </>
       )}
     </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})