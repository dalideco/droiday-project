import { FontAwesome } from '@expo/vector-icons'
import React, { SVGProps, useCallback, useEffect, useState } from 'react'
import { Dimensions, NativeModules, StyleSheet, TouchableOpacity } from 'react-native'
import { InputCaseType, RootStackScreenProps } from '../../types'
import { LeftSVG } from '../LeftSVG'
import { ATag, Button, MultipleInputs, Text, TextInput, useThemeColor, View } from '../Themed'
import { View as DefaultView } from 'react-native'
import Svg, { Circle } from 'react-native-svg'
import Animated,{ useSharedValue,useAnimatedProps,withTiming } from "react-native-reanimated";

const { width, height } = Dimensions.get('window')

export default function Login({ navigation }: RootStackScreenProps<'PasswordSelect'>) {

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


            {/* page layout */}
            <View style={styles.first}>
                <Text style={[styles.centeredText, styles.bigText]}>Daily Goals</Text>
            </View>
            <View style={styles.contained}>
                <DefaultView style={[styles.task, { backgroundColor: lighterColor }]}>
                    <DefaultView style={[styles.taskLeft, { backgroundColor: backgroundColor }]}></DefaultView>
                    <DefaultView style={[styles.taskMiddle]}>
                        <Text style={styles.taskTitle}>Task 1</Text>
                        <Text style={styles.taskXP}>Amount of XP</Text>
                    </DefaultView>
                    <DefaultView style={[styles.taskRight]}>
                        <SvgComponent progress={0.3}/>
                    </DefaultView>
                </DefaultView>
                <DefaultView style={[styles.task, { backgroundColor: lighterColor }]}>
                    <DefaultView style={[styles.taskLeft, { backgroundColor: backgroundColor }]}></DefaultView>
                    <DefaultView style={[styles.taskMiddle]}>
                        <Text style={styles.taskTitle}>Task 2</Text>
                        <Text style={styles.taskXP}>Amount of XP</Text>
                    </DefaultView>
                    <DefaultView style={[styles.taskRight]}>
                        <SvgComponent progress={0.9}/>
                    </DefaultView>
                </DefaultView>
                <DefaultView style={[styles.task, { backgroundColor: lighterColor }]}>
                    <DefaultView style={[styles.taskLeft, { backgroundColor: backgroundColor }]}></DefaultView>
                    <DefaultView style={[styles.taskMiddle]}>
                        <Text style={styles.taskTitle}>Task 3</Text>
                        <Text style={styles.taskXP}>Amount of XP</Text>
                    </DefaultView>
                    <DefaultView style={[styles.taskRight]}>
                        <SvgComponent progress={0.1}/>
                    </DefaultView>
                </DefaultView>
                <DefaultView style={[styles.task, { backgroundColor: lighterColor }]}>
                    <DefaultView style={[styles.taskLeft, { backgroundColor: backgroundColor }]}></DefaultView>
                    <DefaultView style={[styles.taskMiddle]}>
                        <Text style={styles.taskTitle}>Task 4</Text>
                        <Text style={styles.taskXP}>Amount of XP</Text>
                    </DefaultView>
                    <DefaultView style={[styles.taskRight]}>
                        <SvgComponent progress={0.5}/>
                    </DefaultView>
                </DefaultView>
                
            </View>
        </View>
    )
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

export function SvgComponent({progress}: {progress:number}) {
    const  CIRCLE_LENGTH = 100;
    const R = CIRCLE_LENGTH/(2*Math.PI)
    const tint = useThemeColor({},"tint")

    const animatedProgress = useSharedValue(0)

    useEffect(()=>{
        animatedProgress.value= withTiming(progress,{duration:1500})
    },[])

    const animatedProp = useAnimatedProps(()=>({
        strokeDashoffset:CIRCLE_LENGTH*(1-animatedProgress.value)
    }))

    return (
        <Svg width="50" height="50" style={{
            transform:[{rotate:"-90deg"}]
        }}>
            <Circle
                cx={25}
                cy={25}
                r={R}
                stroke="lightgrey"
                strokeWidth={2.5}
            />
            <AnimatedCircle
                cx={25}
                cy={25}
                r={R}
                stroke={tint}
                strokeWidth={4}
                strokeDasharray={CIRCLE_LENGTH}
                animatedProps={animatedProp}
            />
        </Svg>
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center', 
    },
    bigText: {
        fontSize: 25,
        fontWeight: '600',
    },
    smallText: {
        color: 'grey'
    },
    first: {
        marginTop: 50,
        marginBottom: 50
    },
    centeredText: {
        textAlign: 'center',
        marginBottom: 8

    },
    contained: {
        width: '100%',
    },
    task: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'lightgrey'
    },
    taskLeft: {
        width: 50,
        height: 50,
        borderRadius: 20,
    },
    taskMiddle: {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginLeft: 10
    },
    taskRight: {
        marginLeft: 'auto',
        display: 'flex',
        justifyContent: 'center',
    },
    taskTitle: {
        fontSize: 15,
        fontWeight: '500'
    },
    taskXP: {
        color: 'grey'
    }
})
