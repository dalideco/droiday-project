import React, { useMemo } from 'react'
import { View } from '../Themed'
import { ScrollView } from '../Themed'
import SubjectCard2 from '../SubjectCard2'
import { Dimensions } from 'react-native'
import { SUBJECTS } from '../../constants/InitialData'
import { useLectures } from '../../screens/Lectures'

const { width } = Dimensions.get('window')

export default function SubjectSelector() {

    const {
        subject,
        changeSubject
    } = useLectures()

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{ width }}
        >
            {SUBJECTS.map(({ name,image }, index) => (
                <SubjectCard2
                    key={index}
                    title={name}
                    thumbnail={image}
                    selected={subject === name}
                    total={8}
                    onPress={() => { changeSubject(name) }}
                />
            ))}
        </ScrollView>
    )
}
