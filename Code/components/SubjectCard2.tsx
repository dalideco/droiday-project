import { View, Image, Touchable, TouchableOpacity } from "react-native"
import { StyleSheet } from "react-native"
import { useThemeColor } from "./Themed"
import { Text } from "./Themed"
interface props {
    title: string,
    thumbnail: any,
    total: number,
    selected?: boolean,
    onPress: () => void
}

const shadow = {
    elevation: 3,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
}

export default function SubjectCard2({
    title,
    thumbnail,
    total,
    selected = false,
    onPress = () => { }
}: props) {

    const lighterColor = useThemeColor({}, 'lighterColor')

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.6}
            style={[styles.container, {
                backgroundColor: lighterColor,
            }, selected ? shadow : {}]}
        >
            <Image
                style={styles.image}
                source={thumbnail}
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
            {selected && (<View style={[styles.bottomArrow,
                {
                    borderTopColor: lighterColor
                },
            ]}>

            </View>)}
        </TouchableOpacity>
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
        fontSize: 12,
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
    bottomArrow: {
        width: 0,
        height: 0,
        borderWidth: 15,
        borderColor: 'transparent',
        borderTopColor: 'white',
        position: "absolute",
        top: '100%',
        left: '50%',
        transform: [{ translateX: -10 }],
    }
})