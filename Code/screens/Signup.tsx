import React, { useCallback, useState } from 'react'
import { Dimensions } from 'react-native'
import { ATag, Text, useThemeColor, View } from '../components/Themed'
import { RootStackScreenProps } from '../types'
import { StyleSheet } from 'react-native'
import { TextInput } from '../components/Themed'
import { Button } from '../components/Themed'
import { FontAwesome } from '@expo/vector-icons'
import { LeftSVG } from '../components/LeftSVG'
import { useUser } from '../contexts/User'
import validateEmail from '../functions/validateEmail'

const { width, height } = Dimensions.get('window');

export default function Signup({ navigation }: RootStackScreenProps<'Signup'>) {

    const { updateUser } = useUser()
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false)

    const next = useCallback(() => {
        if (!validateEmail(email)) {
            setError(true)
            return;
        }
        setError(false);
        updateUser("email", email)
        navigation.navigate('PasswordSelect')
    }, [email])

    return (
        <View style={styles.container}>
            <View style={styles.first}>
                <Text style={[styles.centeredText, styles.bigText]}>New Account</Text>
                <Text style={[styles.centeredText, styles.smallText]}>Got an email address? Type it</Text>
                <Text style={[styles.centeredText, styles.smallText]}>in the box below</Text>
            </View>
            <View style={styles.contained}>
                <TextInput
                    style={{ marginBottom: 60, borderWidth: 1, borderColor: error?'red':'transparent' }}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={text => { setEmail(text) }}
                ></TextInput>
                <Text style={[styles.centeredText, styles.smallText]}>Already have an account?</Text>
                <ATag
                    textStyle={{ textAlign: 'center' }}
                    onPress={() => { navigation.navigate('Login') }}
                >SIGN IN</ATag>
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
