import React from 'react'
import { View, Text, useThemeColor } from '../Themed'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { useLectures } from '../../screens/Lectures'
import { LOOKEDS } from '../../constants/InitialData'

interface props{
    options: string [],
    selected: string, 
    onSelect : (selected : string)=>void,
    style ?:any
}

export default function Selector({
    options,
    selected,
    onSelect,
    style
}:props) {
    const lighterColor = useThemeColor({}, 'lighterColor')
    const backgroundColor = useThemeColor({}, "background")

    return (
        <View style={[styles.buttonRow, { backgroundColor: lighterColor }, style]}>
            {options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    onPress= {()=>onSelect(option)}
                    style={[
                        styles.headerButton,
                        { borderLeftWidth: index ? 1 : 0, borderLeftColor: backgroundColor },
                    ]}
                >
                    <Text style={[styles.textCenter, {
                        fontWeight: (option === selected) ? "700" : "400"
                    }]}>{option}</Text>
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