import { FontAwesome } from '@expo/vector-icons'
import { setStatusBarBackgroundColor } from 'expo-status-bar'
import React, { useCallback, useState } from 'react'
import { Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useUser } from '../../contexts/User'
import { InputCaseType, RootStackScreenProps } from '../../types'
import { LeftSVG } from '../LeftSVG'
import { ATag, Button, MultipleInputs, Text, TextInput, TextInputAdvanced, useThemeColor, View } from '../Themed'

const { width, height } = Dimensions.get('window')

export default function PhoneNumber({ navigation }: RootStackScreenProps<'PasswordSelect'>) {


    const { updateUser, saveUser } = useUser()
    const tintColor = useThemeColor({}, "tint")
    const lighterColor = useThemeColor({}, "lighterColor")
    const backgroundColor = useThemeColor({}, "background")
    
    const [phoneNumber, setPhoneNumber] = useState("")
    const [error, setError] = useState(false)

    const next= useCallback(async()=>{
        if(isNaN(parseInt(phoneNumber))|| !phoneNumber){
            setError(true)
            return ;
        }
        setError(false)
        updateUser("number",{
            countryCode: 216,
            number: parseInt(phoneNumber)
        })
        await saveUser()
        navigation.navigate("SendNotif")
    },[phoneNumber])

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

            {/* skip button */}
            <ATag
                style={{
                    position: 'absolute',
                    top: 30,
                    right: 10
                }}
                textStyle={{
                    textTransform: 'uppercase',
                    color: 'grey',
                    fontWeight: '500'
                }}
                onPress={() => { navigation.navigate('SendNotif') }}
            >Skip</ATag>

            {/* page layout */}
            <View style={styles.first}>
                <Text style={[styles.centeredText, styles.bigText]}>Getting Started</Text>
                <Text style={[styles.centeredText, styles.smallText]}>Secure your account by enabling the 2-</Text>
                <Text style={[styles.centeredText, styles.smallText]}>step verification using your phone number.</Text>
            </View>
            <View style={styles.contained}>
                <TextInputAdvanced
                    value={ phoneNumber }
                    onChangeText={(text)=>{setPhoneNumber(text)}}
                    style={{ marginBottom: 60,borderWidth: 1, borderColor: error?'red':'transparent' }}
                    placeholder="Mobile Number"
                    LeftComponent={() => (
                        <View style={{
                            backgroundColor: lighterColor,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRightWidth: 2,
                            borderRightColor: backgroundColor,
                            paddingRight: 5,
                            marginRight: 5
                        }}>
                            <Image
                                source={require(`../../assets/images/flag.png`)}
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 40,
                                    marginRight: 5
                                }}
                            />
                            <Text>+216</Text>
                        </View>
                    )}
                ></TextInputAdvanced>
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
