import { View, Image } from "react-native"
import { StyleSheet } from "react-native"
import { useThemeColor } from "./Themed"
import { Text } from "./Themed"
interface props {
    subject: string,
    title: string,
    thumbnail: any,
    total: number,
    done:number
}

export default function SubjectCard({
    subject, 
    title,
    thumbnail,
    total,
    done,
}:props) {

    const lighterColor = useThemeColor({}, 'lighterColor')
    const tintColor = useThemeColor({}, "tint")
    
    return (
        <View style={[styles.container, {
            backgroundColor: lighterColor,
        }]}>
            <Image
                style={styles.image}
                source={thumbnail}
            ></Image>
            <View style={styles.content}>
                <Text style={[{
                    color: tintColor,
                    fontWeight: '600'
                }]}>{subject}</Text>
                <Text style={styles.courseName}>
                    {title}
                </Text>
                <View style={{
                    display:"flex",
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-between'
                }}>
                    <Text>
                        {done} out of {total} lectures
                    </Text>
                    <View style={styles.progressBar}>
                        <View style={[styles.prog,{
                            width: `${done*100/total}%`
                        }]}></View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 350,
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
        height: 150,
        borderTopLeftRadius:15,
        borderTopRightRadius:15
    },
    content: {
        flex: 1,
        // backgroundColor:'red',
        padding: 25,
        display: 'flex',
        justifyContent: 'space-between',
    },
    courseName: {
        fontSize: 23,
        fontWeight: '600'
    },
    progressBar: {
        width: 35,
        height:8,
        borderRadius: 8,
        backgroundColor: '#E8EEF4',
        overflow:'hidden',
    },
    prog: {
        borderRadius: 8,
        width: '50%',
        height: '100%',
        backgroundColor:'#00D9CD',
    }
})