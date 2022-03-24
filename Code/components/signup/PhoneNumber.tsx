import { FontAwesome } from '@expo/vector-icons'
import { setStatusBarBackgroundColor } from 'expo-status-bar'
import React, { useCallback, useState } from 'react'
import { Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { InputCaseType, RootStackScreenProps } from '../../types'
import { LeftSVG } from '../LeftSVG'
import { ATag, Button, MultipleInputs, Text, TextInput, TextInputAdvanced, useThemeColor, View } from '../Themed'

const { width, height } = Dimensions.get('window')

export default function PhoneNumber({ navigation }: RootStackScreenProps<'PasswordSelect'>) {

    const tintColor = useThemeColor({}, "tint")
    const lighterColor = useThemeColor({}, "lighterColor")
    const backgroundColor = useThemeColor({}, "background")

    const [inputs, setInputs] = useState<InputCaseType[]>([
        {
            key: 'E-mail',
            value: ''
        },
        {
            key: 'Password',
            value: '',
            RightComponent: () => (
                <ATag style={{ marginRight: 10 }}>FORGOT</ATag>
            )
        }
    ])

    const onInputsChange = ({ key, value }: { key: string, value: string }) => {
        setInputs(inputs.map(input => {
            if (input.key === key) {
                input.value = value
            }
            return input;
        }))
    }

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
                    color:'grey',
                    fontWeight: '500'
                }}
                onPress={()=>{navigation.navigate('Root')}}
            >Skip</ATag>

            {/* page layout */}
            <View style={styles.first}>
                <Text style={[styles.centeredText, styles.bigText]}>Getting Started</Text>
                <Text style={[styles.centeredText, styles.smallText]}>Secure your account by enabling the 2-</Text>
                <Text style={[styles.centeredText, styles.smallText]}>step verification using your phone number.</Text>
            </View>
            <View style={styles.contained}>
                <TextInputAdvanced
                    style={{ marginBottom: 60 }}
                    placeholder="Mobile Number"
                    LeftComponent={() => (
                        <View style={{
                            backgroundColor: lighterColor,
                            display:'flex',
                            flexDirection:'row',
                            alignItems:'center',
                            borderRightWidth: 2,
                            borderRightColor: backgroundColor,
                            paddingRight: 5,
                            marginRight: 5
                        }}>
                            <Image
                                source={require(`../../assets/images/img.jpeg`)}
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius:40,
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
                    onPress={() => { navigation.navigate('Root') }}
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
