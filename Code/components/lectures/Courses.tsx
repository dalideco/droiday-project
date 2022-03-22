import React, { useMemo } from 'react'
import { View } from '../Themed'
import SubjectCard3 from '../SubjectCard3'
import { useLectures } from '../../screens/Lectures'
import { COURSES } from '../../constants/InitialData'

export default function Courses() {

    const { looked, subject } = useLectures()

    const shownCourses = useMemo(() => {
        if (looked === "ALL")
            return COURSES
                .filter(({ subjectName }) => subjectName === subject)
                .map(({ name, sections }, index) => (
                    <SubjectCard3
                        key={name}
                        subject={name}
                        sections={sections}
                        progress={50}
                        total={8}
                    />
                ))
        else if (looked === "STUDYING")
            return COURSES
                .filter(({ subjectName, studying }) => {
                    return (subjectName === subject) && studying
                })
                .map(({ name, sections }, index) => (
                    <SubjectCard3
                        key={name}
                        subject={name}
                        sections={sections}
                        progress={50}
                        total={8}
                    />
                ))
        else{
            return COURSES
                .filter(({ subjectName, saved }) => {
                    return (subjectName === subject) && saved
                })
                .map(({ name, sections }, index) => (
                    <SubjectCard3
                        key={name}
                        subject={name}
                        sections={sections}
                        progress={50}
                        total={8}
                    />
                ))
        }

    }, [looked, subject])

    return (
        <View>
            {shownCourses}
        </View>
    )
}
