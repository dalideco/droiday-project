import { FontAwesome } from '@expo/vector-icons'
import React, { useCallback, useEffect, useState } from 'react'
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import { useUser } from '../../contexts/User'
import { InputCaseType, RootStackScreenProps } from '../../types'
import { ATag, Button, MultipleInputs, Text, TextInput, useThemeColor, View } from '../Themed'

const { width, height } = Dimensions.get('window')

export default function PasswordSelect({ navigation }: RootStackScreenProps<'PasswordSelect'>) {


  const {saveUser} = useUser();
  const tintColor = useThemeColor({}, "tint")
  const lighterColor = useThemeColor({}, "lighterColor")

  const [inputs, setInputs] = useState<InputCaseType[]>([
    {
      key: 'Password',
      value: ''
    },
    {
      key: 'Repeat password',
      value: '',
    }
  ])

  const [error, setError] = useState(false)

  const onInputsChange =({key,value }:{key:string, value:string})=>{
    setInputs(inputs.map(input=>{
      if(input.key === key){
        input.value = value
      }
      return input; 
    }))
  }

  const next = useCallback(()=>{
    if((inputs[0].value !== inputs[1].value) || !inputs[0].value){
      setError(true)
      return ;
    }
    saveUser().then(()=>{
      setError(false)
      navigation.navigate('PhoneNumber')
    });
  },[])

  return (
    <View
      style={styles.container}
    >

      {/* go back button */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 30,
          left: 10
        }}
        onPress={() => { navigation.goBack() }}
      >
        <FontAwesome
          name="arrow-left"
          color={tintColor}
          size={25}

        />
      </TouchableOpacity>


      {/* page layout */}
      <View style={styles.first}>
        <Text style={[styles.centeredText, styles.bigText]}>Password</Text>
        <Text style={[styles.centeredText, styles.smallText]}>Create you new Password</Text>
      </View>
      <View style={styles.contained}>
        <MultipleInputs
          style={{ marginBottom: 100,borderWidth: 1, borderColor: error?'red':'transparent' }}
          inputs={inputs}
          onChange={onInputsChange}
        ></MultipleInputs>
      </View>
      <View style={styles.contained}>
        <Button
          style={{
            marginBottom: 20
          }}
          onPress={next}
        >
          Create Account
        </Button>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bigText: {
    fontSize: 25,
    fontWeight: '600',
    fontFamily:"HKGrotesk-Semibold"
  },
  smallText: {
    color: 'grey'
  },
  first: {
    marginTop: 50
  },
  centeredText: {
    textAlign: 'center',
    marginBottom: 8

  },
  contained: {
    width: '80%'
  }
})
