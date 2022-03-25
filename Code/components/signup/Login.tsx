import { FontAwesome } from '@expo/vector-icons'
import React, { useCallback, useState } from 'react'
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import { useUser } from '../../contexts/User'
import { InputCaseType, RootStackScreenProps } from '../../types'
import { LeftSVG } from '../LeftSVG'
import { ATag, Button, MultipleInputs, Text, TextInput, useThemeColor, View } from '../Themed'

const { width, height } = Dimensions.get('window')

export default function Login({ navigation }: RootStackScreenProps<'PasswordSelect'>) {

  const tintColor = useThemeColor({}, "tint")
  const lighterColor = useThemeColor({}, "lighterColor")
  const {updateUser, saveUser} = useUser()

  const [inputs, setInputs] = useState<InputCaseType[]>([
    {
      key: 'E-mail',
      value: ''
    },
    {
      key: 'Password',
      value: '',
      RightComponent:()=>(
          <ATag style={{marginRight: 10}}>FORGOT</ATag>
      )
    }
  ])

  const onInputsChange =({key,value }:{key:string, value:string})=>{
    setInputs(inputs.map(input=>{
      if(input.key === key){
        input.value = value
      }
      return input; 
    }))
  }

  const next = useCallback(()=>{
    updateUser('email','dali@dali.dali');
    saveUser().then(()=>{
      navigation.navigate('Root')
    })
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
        <Text style={[styles.centeredText, styles.bigText]}>Log in</Text>
        <Text style={[styles.centeredText, styles.smallText]}>Access you account by typing</Text>
        <Text style={[styles.centeredText, styles.smallText]}>your login details</Text>
      </View>
      <View style={styles.contained}>
        <MultipleInputs
          style={{ marginBottom: 100 }}
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
          LeftSVG={LeftSVG}
        >
          Continue
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
