import { Badge, Course, Friend, lookedsType, Subject } from "../types"

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
        name: "Alphabet and phonics",
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
        subjectName: "Alphabet and phonics",
        studying: false,
        saved: false,
        sections : [
            {
                name:"What is the alphabet?",
                description: "What does it serve for?",
                completed: false,
            },
            {
                name: "Types ",
                description: "English isn't the only language.",
                completed: false,
            },
            {
                name: "What is the alphabet?",
                description: "What does it serve for?",
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


export const BADGES:Badge[] = [
    {
        name: "All-in Master",
        description: "Finish all lessons of a chapter",
        image: require('../assets/images/adaptive-icon.png')
    },
    {
        name: "All-in Master",
        description: "Finish all lessons of a chapter",
        image: require('../assets/images/adaptive-icon.png')
    }
]

export const FRIENDS: Friend[]=[
    {
        name: "Med Amine Hamdouni", 
        xp: 111500,
        image: require('../assets/images/img.jpeg')
    }
]

export const SCORES: Friend[]=[
    {
        name: "Dali Sahnoun", 
        xp: 111111500,
        image: require('../assets/images/img.jpeg')
    }
]