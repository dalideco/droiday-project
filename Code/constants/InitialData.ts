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
        name: "Alphabet and phonics",
        subjectName: "Alphabet and phonics",
        studying: false,
        saved: false,
        sections: [
            {
                name: "History",
                description: "When did it all start?",
                completed: false,
            },
            {
                name: "Types ",
                description: "Discover its different types.",
                completed: false,
            },
            {
                name: "Names of letters",
                description: "Learn about each letter",
                completed: false,
            },
            {
                name: "Phonics",
                description: "Understand symbols & sounds.",
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

        ]
    },
    {
        name: "Calculus",
        subjectName: "Numbers",
        studying: true,
        saved: false,
        sections: [
            {
                name: "Addition",
                description: "Learn how to add numbers.",
                completed: false,
            },
            {
                name: "Subtraction",
                description: "Learn how to subtract numbers.",
                completed: false,
            },
            {
                name: "Multiplication",
                description: "Learn how to multiply numbers.",
                completed: false,
            },
        ]
    },
    {
        name: "Algebra",
        subjectName: "Numbers",
        studying: false,
        saved: false,
        sections: [
            {
                name: "Addition",
                description: "Learn how to add numbers.",
                completed: false,
            },
            {
                name: "Subtraction",
                description: "Learn how to subtract numbers.",
                completed: false,
            },
            {
                name: "Multiplication",
                description: "Learn how to multiply numbers.",
                completed: false,
            },
        ]
    },
    {
        name: "Algorithms and Data structures",
        subjectName: "Computer Science",
        studying: false,
        saved: false,
        sections: [
            {
                name: "Addition",
                description: "Learn how to add numbers.",
                completed: false,
            },
            {
                name: "Subtraction",
                description: "Learn how to subtract numbers.",
                completed: false,
            },
            {
                name: "Multiplication",
                description: "Learn how to multiply numbers.",
                completed: false,
            },
        ]
    },
    
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
    },
    {
        name: "Med Ali Sahnoun",
        xp: 111499,
        image: require('../assets/images/dali.jpg')
    },
    {
        name: "Ali Doggaz",
        xp: 111498,
        image: require('../assets/images/dali.jpg')
    },
    {
        name: "Ala Ben Hamouda",
        xp: 71256,
        image: require('../assets/images/hamdouni.jpg')
    },
    {
        name: "Azer Chabbar",
        xp: 1023,
        image: require('../assets/images/dali.jpg')
    },
]

export const SCORES: Friend[] = [
    {
        name: "Med Ali Sahnoun",
        xp: 111499,
        image: require('../assets/images/dali.jpg')
    }
]