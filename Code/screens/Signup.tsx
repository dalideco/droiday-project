import React from 'react'
import { Dimensions } from 'react-native'
import { ATag, Text, useThemeColor, View } from '../components/Themed'
import { RootStackScreenProps } from '../types'
import { StyleSheet } from 'react-native'
import { TextInput } from '../components/Themed'
import { Button } from '../components/Themed'
import { FontAwesome } from '@expo/vector-icons'
import { LeftSVG } from '../components/LeftSVG'

const { width, height } = Dimensions.get('screen');

export default function Signup({ navigation }: RootStackScreenProps<'Signup'>) {
    return (
        <View style={styles.container}>
            <View style={styles.first}>
                <Text style={[styles.centeredText, styles.bigText]}>New Account</Text>
                <Text style={[styles.centeredText, styles.smallText]}>Got an email address? Type it</Text>
                <Text style={[styles.centeredText, styles.smallText]}>in the box below</Text>
            </View>
            <View style={styles.contained}>
                <TextInput style={{ marginBottom: 60 }} placeholder="E-mail"></TextInput>
                <Text style={[styles.centeredText, styles.smallText]}>Already have an account?</Text>
                <ATag
                    textStyle={{ textAlign: 'center' }}
                    onPress={()=>{navigation.navigate('Login')}}
                >SIGN IN</ATag>
            </View>
            <View style={styles.contained}>
                <Button
                    style={{
                        marginBottom: 20
                    }}
                    onPress={() => { navigation.navigate('PasswordSelect') }}
                    LeftSVG={LeftSVG}
                >
                    Continue
                </Button>
            </View>

        </View >
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
