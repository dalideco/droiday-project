import { View, Image } from "react-native"
import { StyleSheet } from "react-native"
import { useThemeColor } from "./Themed"
import { Text } from "./Themed"
import { Section } from '../types'

interface props {
    progress: number,
    subject: string,
    total: number,
    sections: Section[]
}

export default function SubjectCard3({
    progress,
    subject,
    total,
    sections
}: props) {

    const lighterColor = useThemeColor({}, 'lighterColor')
    const tintColor = useThemeColor({}, "tint")

    return (
        <View style={[styles.container, {
            backgroundColor: lighterColor,
        }]}>

            <View style={styles.content}>

                <Text
                    style={[{
                        color: tintColor,
                        fontWeight: '600',
                        paddingTop: 10,
                        paddingLeft: 10

                    }]}
                >{subject}</Text>
                <View style={{ height: 20 }}></View>
                <View
                    style={{
                        display: "flex",
                        flex: 1,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}
                >

                    {sections.map(({ name, description }, index) => (
                        <View
                            key={index}
                            style={styles.section}
                        >
                            <View
                                style={[
                                    styles.sectionCircle,
                                    { backgroundColor: tintColor, }
                                ]}
                            ></View>
                            <View>
                                <Text style={{
                                    fontSize: 20
                                }}>{name}</Text>
                                <Text
                                    style={{
                                        color: 'grey'
                                    }}
                                >{description}</Text>
                            </View>
                        </View>
                    ))}

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 315,
        margin: 20,
        borderRadius: 15,
        display: "flex",
        alignItems: 'stretch',
        justifyContent: "flex-start",
        elevation: 3,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
    },
    progress: {
        width: 34,
        height: 34,
        backgroundColor: "#f0f",
        borderRadius: 50,
        overflow: "hidden",
    },
    image: {
        width: '100%',
        height: 72,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    content: {
        flex: 1,
        // backgroundColor:'red',
        padding: 18,
        display: 'flex',
        justifyContent: 'space-between',
    },
    courseName: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: "center"
    },
    progressBar: {
        width: 35,
        height: 8,
        borderRadius: 8,
        backgroundColor: '#E8EEF4',
        overflow: 'hidden',
    },
    prog: {
        borderRadius: 8,
        width: '50%',
        height: '100%',
        backgroundColor: '#00D9CD',
    },
    section: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '90%',
        marginBottom: 20
    },
    sectionCircle: {
        position: "relative",
        top: 7,
        marginRight: 15,
        width: 8,
        height: 8,
        borderRadius: 5
    }
})