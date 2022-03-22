import { Course, lookedsType, Subject } from "../types"

export const LOOKEDS: lookedsType = [
    {
        name: "ALL",
        courses: []
    },
    {
        name: "STUDYING",
        courses: []
    },
    {
        name: "SAVED",
        courses: []
    },
]

export const SUBJECTS: Subject[] = [
    {
        name: "Alphabets and phonics",
        image: require('../assets/images/alphabet.jpg')
    },
    {
        name: "Numbers",
        image: require('../assets/images/Numbers.jpg')
    },
    {
        name: "Computer Science",
        image: require('../assets/images/Science.jpg')
    },
]

export const COURSES: Course[] = [
    {
        name: "Introduction to Alphabets",
        subjectName: "Alphabets and phonics",
        studying: false,
        saved: false,
        sections : [
            {
                name:"What are alphabets?",
                description: "What are the purpose?",
                completed: false,
            },
            {
                name:"What are alphabets?",
                description: "What are the purpose?",
                completed: false,
            },
            {
                name:"What are alphabets?",
                description: "What are the purpose?",
                completed: false,
            },
        ]
    },
    {
        name: "Calculus",
        subjectName: "Numbers",
        studying: false,
        saved: false,
        sections : [
            {
                name:"What are alphabets?",
                description: "What are the purpose?",
                completed: false,
            },
            {
                name:"What are alphabets?",
                description: "What are the purpose?",
                completed: false,
            },
            {
                name:"What are alphabets?",
                description: "What are the purpose?",
                completed: false,
            },
        ]
    },
    {
        name: "Algorithm",
        subjectName: "Computer Science",
        studying: true,
        saved: false,
        sections : [
            {
                name:"What are alphabets?",
                description: "What are the purpose?",
                completed: false,
            },
            {
                name:"What are alphabets?",
                description: "What are the purpose?",
                completed: false,
            },
            {
                name:"What are alphabets?",
                description: "What are the purpose?",
                completed: false,
            },
        ]
    }
]