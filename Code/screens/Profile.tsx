import { StyleSheet } from "react-native";
import { ScrollView, Text, useThemeColor, View } from "../components/Themed";
import { View as DefaultView } from "react-native";
import { Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Selector from "../components/profile/Selector";
import { useState } from "react";
import { BADGES, FRIENDS, SCORES } from "../constants/InitialData";
import { formatNumber } from "../functions/formtNumber";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootStackScreenProps } from "../types";

type Selected = "BADGES" | "FRIENDS" | "SCORES"
const OPTIONS: Selected[] = ["BADGES", "FRIENDS", "SCORES"]



export default function Profile({navigation} : RootStackScreenProps<'Root'>) {

  const lightColor = useThemeColor({}, "lighterColor")
  const [selected, setSelected] = useState<Selected>("BADGES")

  return (
    <ScrollView>
      <View style={styles.bigContainer}>
        <TouchableOpacity
          style={styles.toolBar}
          onPress={ ()=>{navigation.navigate('Settings')} }
        >
          <FontAwesome size={30} name="gear" color="#344356" />
        </TouchableOpacity>
        <View style={styles.container}>
          <Image source={require(`../assets/images/profile.jpg`)} style={[styles.image,{borderColor:lightColor}]} />
          <Text style={styles.title}>Sirajeddine Aissa</Text>
          <Text style={styles.xp}>119,512 XP</Text>
          {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
        </View>

        <Selector
          options={OPTIONS}
          selected={selected}
          onSelect={(selected) => { setSelected(selected as Selected) }}
          style={{ marginTop: 20 }}
        />

        <View style={[{ backgroundColor: lightColor }, styles.badgesContainer]}>

          {(selected === "BADGES") && BADGES.map(({ name, description, image }, index) => (
            <DefaultView style={styles.badge} key={index}>
              <Image
                style={[styles.badgeImage]}
                source={image}
              ></Image>
              <DefaultView style={styles.badgeContent}>
                <Text style={styles.badgeTitle}>{name}</Text>
                <Text style={styles.badgeDescription}>{description}</Text>
              </DefaultView>
            </DefaultView>
          ))}

          {(selected === "FRIENDS") && FRIENDS.map(({ name, xp, image }, index) => (
            <DefaultView style={styles.badge} key={index}>
              <Image
                style={[styles.badgeImage, { borderRadius: 50 }]}
                source={image}
              ></Image>
              <DefaultView style={styles.badgeContent}>
                <Text style={styles.badgeTitle}>{name}</Text>
                <Text style={styles.badgeDescription}> {formatNumber(xp)} XP</Text>
              </DefaultView>
            </DefaultView>
          ))}

          {(selected === "SCORES") && SCORES.map(({ name, xp, image }, index) => (
            <DefaultView style={styles.badge} key={index}>
              <Image
                style={[styles.badgeImage, { borderRadius: 50 }]}
                source={image}
              ></Image>
              <DefaultView style={styles.badgeContent}>
                <Text style={styles.badgeTitle}>{name}</Text>
                <Text style={styles.badgeDescription}> {formatNumber(xp)} XP</Text>
              </DefaultView>
            </DefaultView>
          ))}


        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  toolBar: {
    width: "100%",
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 30,
    marginTop: 30,
    marginBottom: 10
  },
  bigContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    // backgroundColor: 'green',
    marginBottom:80
  },
  container: {
    flex: 4,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    // backgroundColor: 'red'
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
  badgesContainer: {
    width: '90%',
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    borderRadius: 15,
  },
  badge: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  badgeImage: {
    width: 50,
    height: 50
  },
  badgeTitle: {
    fontSize: 17,
    fontWeight: '600'
  },
  badgeDescription: {
    color: 'grey'
  },
  badgeContent: {
    marginLeft: 15
  }
});
