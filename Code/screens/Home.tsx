import { StyleSheet, TouchableOpacity } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, ScrollView, InputWithButton, useThemeColor } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Dimensions } from 'react-native';
import { TextInput } from '../components/Themed';
import { Button } from '../components/Themed';
import SubjectCard from '../components/SubjectCard';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const tintColor = useThemeColor({}, 'tint')
  const backgroundColor = useThemeColor({}, 'background')
  const lighterColor = useThemeColor({}, 'lighterColor')

  const [search, setSearch] = useState("")

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.smallContainer}>
          <Text style={[styles.title,{marginBottom: 15}]}>Hi, Sirajeddine</Text>
          <Text style={styles.subtitle}>
            Ready to learn something today?
          </Text>
          <Text style={styles.subtitle}>
            Search in the box below.
          </Text>

          <InputWithButton style={{
            marginBottom: 20,
            marginTop: 20
          }}>
          </InputWithButton>

          <Text style={styles.study}>
            DAILY TASKS
          </Text>

          <View
            style={{
              backgroundColor: tintColor,
              borderRadius: 10,
              elevation: 3,
              shadowColor: 'black',
              shadowOpacity: 0.2,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 10,
              padding: 20,
              marginTop: 20,
              marginBottom: 20
            }}
          >
            <Text style={[styles.title, {
              color: backgroundColor,
              fontSize:20
            }]}>You have got 4 tasks </Text>
            <Text style={[styles.title, {
              color: backgroundColor,
              fontSize:20,
              marginBottom:15
            }]}>For today!</Text>
            <Button
              style={{
                backgroundColor: lighterColor,
                alignSelf: 'center',
                borderRadius: 100,
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 40,
                paddingRight: 40
              }}
              textStyle={{
                color: tintColor
              }}
              onPress={()=>{navigation.navigate('DailyGoals')}}
            >Check tasks now!</Button>
          </View>

          <Text style={styles.study}>
            STUDY IN PROGRESS
          </Text>

        </View>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false} style={{
              width: Dimensions.get('window').width,
              // backgroundColor:'red'
            }}>
            <SubjectCard
              subject="Natural Science"
              title="Anatomy of the human body"
              thumbnail={require(`../assets/images/Science.jpg`)}
              total={8}
              done={2}
            />
            <SubjectCard
              subject="Maths"
              title="Numbers"
              thumbnail={require(`../assets/images/Numbers.jpg`)}
              total={8}
              done={6}
            />
            <SubjectCard
              subject="Maths"
              title="Numbers"
              thumbnail={require(`../assets/images/Numbers.jpg`)}
              total={8}
              done={6}
            />
          </ScrollView>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    minHeight: Dimensions.get('window').height,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:50,
    marginBottom:60
    // backgroundColor: 'red',
  },
  smallContainer: {
    // minHeight: Dimensions.get('window').height,
    width: Dimensions.get('window').width * 0.85,
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: '#5B6777',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '500'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  study: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    fontWeight: '600',
  }
});
