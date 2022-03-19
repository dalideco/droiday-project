import { View, Image } from "react-native"
import { StyleSheet } from "react-native"
import { useThemeColor } from "./Themed"
import { Text } from "./Themed"
interface props {
    title: string,
    thumbnail: string,
    total: number,
}

export default function SubjectCard2({
    title,
    thumbnail,
    total,
}: props) {

    const lighterColor = useThemeColor({}, 'lighterColor')
    const tintColor = useThemeColor({}, "tint")

    return (
        <View style={[styles.container, {
            backgroundColor: lighterColor,
        }]}>
            <Image
                style={styles.image}
                source={require(`../assets/images/alphabet.jpg`)}
            ></Image>
            <View style={styles.content}>
                <Text style={styles.courseName}>
                    {title}
                </Text>
                <View style={{
                    display: "flex",
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 131,
        height: 147,
        margin: 20,
        borderRadius: 15,
        display: "flex",
        alignItems: 'stretch',
        elevation: 3,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
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
    }
})