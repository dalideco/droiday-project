import React from 'react'
import { View, Text, useThemeColor } from '../Themed'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { useLectures } from '../../screens/Lectures'
import { LOOKEDS } from '../../constants/InitialData'

export default function Selector() {

    const { looked, changeLooked } = useLectures()
    const lighterColor = useThemeColor({}, 'lighterColor')
    const backgroundColor = useThemeColor({}, "background")

    return (
        <View style={[styles.buttonRow, { backgroundColor: lighterColor }]}>
            {LOOKEDS.map(({ name, courses }, index) => (
                <TouchableOpacity
                    key={index}
                    onPress= {()=>changeLooked(name)}
                    style={[
                        styles.headerButton,
                        { borderLeftWidth: index ? 1 : 0, borderLeftColor: backgroundColor },
                    ]}
                >
                    <Text style={[styles.textCenter, {
                        fontWeight: (name === looked) ? "700" : "400"
                    }]}>{name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    buttonRow: {
        backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 15,
        overflow: "hidden"
    },
    headerButton: {
        padding: 15,
        width: 110,
        textAlign: 'center',
        borderLeftWidth: 2
    },
    textCenter: {
        textAlign: 'center'
    }
})