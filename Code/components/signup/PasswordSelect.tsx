import React from 'react'
import { RootStackScreenProps } from '../../types'
import { Button, Text } from '../Themed'

export default function PasswordSelect({navigation}: RootStackScreenProps<'PasswordSelect'>) {
  return (
    <Button onPress={()=>{navigation.goBack()}}>back</Button>
  )
}
