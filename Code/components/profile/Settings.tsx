import React, { useCallback } from 'react'
import { useThemeColor, View, Text, ATag } from '../Themed'
import { StyleSheet, Switch } from 'react-native'
import useColorScheme from '../../hooks/useColorScheme'
import { RootStackScreenProps } from '../../types'
import { useUser } from '../../contexts/User'
import { useTheme } from '../../contexts/Theme'

export default function Settings({ navigation }: RootStackScreenProps<'Settings'>) {


    const { removeUser } = useUser()
    const { theme, changeTheme } = useTheme()
    const backgroundColor = useThemeColor({}, 'background')
    const tabIconDefaultColor = useThemeColor({}, 'tabIconDefault')

    const disconnect = useCallback(() => {
        removeUser().then(() => {
            navigation.navigate('Signup')
        })
    }, [])

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <View style={[styles.setting, {
                marginBottom: 30,
                borderTopColor: tabIconDefaultColor,
                borderBottomColor: tabIconDefaultColor
            }]}>
                <Text style={styles.settingText}>Dark mode</Text>
                <Switch
                    value={theme === "dark"}
                    onValueChange={value=>{changeTheme(value?"dark":"light")}}
                />
            </View>
            <ATag
                style={styles.disconnect}
                onPress={disconnect}
            >DISCONNECT</ATag>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    setting: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    disconnect: {
        alignSelf: 'center',
        padding: 10
    },
    settingText: {
        fontSize: 17
    }
})