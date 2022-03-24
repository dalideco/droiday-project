import React, { useEffect } from 'react'
import { View, Text } from '../components/Themed'
import { Dimensions, StyleSheet } from 'react-native'
import { RootStackScreenProps } from '../types'
import { useUser } from '../contexts/User'

const { width, height } = Dimensions.get('window')

export default function Loading({ navigation }: RootStackScreenProps<'Loading'>) {

    const {getUser} = useUser()

    useEffect(()=>{
        getUser().then(user=>{
            if(!user) {
                navigation.navigate('Signup')
                return 
            }
            navigation.navigate('Root')
        })
    },[])

    return (
        <View style={styles.container}>
            <Text>Loading</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width, height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
