import { FontAwesome } from '@expo/vector-icons'
import { setStatusBarBackgroundColor } from 'expo-status-bar'
import React, { useCallback, useState } from 'react'
import { Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useUser } from '../../contexts/User'
import { InputCaseType, RootStackScreenProps } from '../../types'
import { LeftSVG } from '../LeftSVG'
import { ATag, Button, MultipleInputs, Text, TextInput, TextInputAdvanced, useThemeColor, View } from '../Themed'

const { width, height } = Dimensions.get('window')

export default function SendNotif({ navigation }: RootStackScreenProps<'PasswordSelect'>) {

    const {updateUser,saveUser}= useUser()
    const tintColor = useThemeColor({}, "tint")

    const next= useCallback(async()=>{
        updateUser("notified",true)
        await saveUser()
        navigation.navigate('Root')
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
                onPress={() => { navigation.navigate('Root') }}
            >Skip</ATag>

            {/* page layout */}
            <View style={styles.first}>
                <Image source={require(`../../assets/images/notifications.png`)} style={styles.image} />
            </View>
            <View style={styles.contained}>
                <Text style={[styles.centeredText, styles.bigText]}>Notifications</Text>
                <Text style={[styles.centeredText, styles.smallText]}>Stay notified about our new</Text>
                <Text style={[styles.centeredText, styles.smallText]}>resources, challenges and daily</Text>
                <Text style={[styles.centeredText, styles.smallText]}>goals.</Text>
            </View>
            <View style={[styles.contained, styles.flexVerticalCenter]}>
                <Button
                    style={{
                        marginBottom: 20
                    }}
                    onPress={next}
                    LeftSVG={LeftSVG}
                >
                    ALLOW
                </Button>
                <ATag
                    textStyle={{ color: 'grey' }}
                    onPress={()=>{;navigation.navigate('Root')}}
                >SKIP</ATag>
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
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 30
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
    },
    image: {
        width: 180,
        height: 180,
        borderRadius: 180 / 2,
        shadowColor: "black",
        shadowOpacity: 0.15,
        shadowOffset: { width: 100, height: 100 },
        shadowRadius: 10,
    },
    flexVerticalCenter: {
        display: 'flex',
        alignItems: 'center'
    }
})
