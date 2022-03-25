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
        sections: [
            {
                name: "What is the alphabet?",
                description: "What does it serve for?",
                completed: false,
            },
            {
                name: "Types ",
                description: "English isn't the only language.",
                completed: false,
            },
            {
                name: "History",
                description: "How was the alphabet created?",
                completed: false,
            },
            {
                name: "Phonics",
                description: "Understanding symbols & sounds.",
                completed: false,
            },
        ]
    },
    {
        name: "How to practice writing?",
        subjectName: "Alphabet and phonics",
        studying: true,
        saved: false,
        sections: [
            {
                name: "An Introduction",
                description: "What does it serve for?",
                completed: false,
            },
            {
                name: "Writing the alphabet",
                description: "English isn't the only language.",
                completed: false,
            },
            {
                name: "Invention of Writing",
                description: "How was the alphabet created?",
                completed: false,
            },
        ]
    },
    {
        name: "Calculus",
        subjectName: "Numbers",
        studying: false,
        saved: false,
        sections: [
            {
                name: "What are alphabets?",
                description: "What are the purpose?",
                completed: false,
            },
            {
                name: "What are alphabets?",
                description: "What are the purpose?",
                completed: false,
            },
            {
                name: "What are alphabets?",
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
        sections: [
            {
                name: "What are alphabets?",
                description: "What are the purpose?",
                completed: false,
            },
            {
                name: "What are alphabets?",
                description: "What are the purpose?",
                completed: false,
            },
            {
                name: "What are alphabets?",
                description: "What are the purpose?",
                completed: false,
            },
        ]
    }
]


export const BADGES: Badge[] = [
    {
        name: "All-in Master",
        description: "Finish all lessons of a chapter",
        image: require('../assets/images/all-in.png')
    },
    {
        name: "Performer",
        description: "Complete a quiz",
        image: require('../assets/images/performer.png')
    },
    {
        name: "Intellectual",
        description: "Study two lectures",
        image: require('../assets/images/intellectual.png')
    },
    {
        name: "Conqueror",
        description: "Finish #1 in the scoreboard",
        image: require('../assets/images/conqueror.png')
    },
    {
        name: "Steady",
        description: "Study every day for 30 days",
        image: require('../assets/images/steady.png')
    },
]

export const FRIENDS: Friend[] = [
    {
        name: "Med Amine Hamdouni",
        xp: 111500,
        image: require('../assets/images/hamdouni.jpg')
    }
]

export const SCORES: Friend[] = [
    {
        name: "Med Ali Sahnoun",
        xp: 111499,
        image: require('../assets/images/dali.jpg')
    }
]