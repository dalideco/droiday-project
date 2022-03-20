import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
export default function TabTwoScreen() {
  return (
    <View style={styles.bigContainer}>
      <View style={styles.toolBar}>
        <FontAwesome size={30} style={{ marginBottom: -3 }} name="gear" color="#344356" />
      </View>
      <View style={styles.container}>
        <Image source={require(`../assets/images/img.jpeg`)} style={styles.image} />
        <Text style={styles.title}>Sirajeddine Aissa</Text>
        <Text style={styles.xp}>114,132 XP</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  toolBar: {
    flex: 1,
    height:30,
    padding:50,
    paddingRight:30,
    width:"100%",
    flexDirection:"row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  bigContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  container: {
    flex: 4,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    borderWidth: 10,
    borderColor: "#ffff",
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 100, height: 100 },
    shadowRadius: 10,
  },
  title: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  xp: {
    color: "#5B6777",
    textAlign: "center",
    fontSize: 22,
    letterSpacing: 5,
    fontWeight: "500",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
