import { StyleSheet } from 'react-native';
import SubjectCard3 from '../components/SubjectCard3';
import SubjectCard2 from '../components/SubjectCard2';
import { Dimensions } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, ScrollView, useThemeColor } from '../components/Themed';
import { TouchableOpacity } from 'react-native';
import { createContext, useContext, useState } from 'react';
import { lookedsType, lookedType, Subject, SubjectName } from '../types';
import Selector from '../components/lectures/Selector';
import SubjectSelector from '../components/lectures/SubjectSelector';
import { LOOKEDS } from '../constants/InitialData';
import Courses from '../components/lectures/Courses';

const { width } = Dimensions.get('screen')

const LecturesContext = createContext<{
  looked: lookedType,
  changeLooked: (l: lookedType) => void,
  subject: SubjectName,
  changeSubject: (s: SubjectName) => void,
}>({
  looked: "ALL",
  changeLooked: () => { },
  subject: "Alphabets and phonics",
  changeSubject: () => { }
})

//exporting hook
export function useLectures() {
  return useContext(LecturesContext)
}

//main component
export default function TabTwoScreen() {

  //selected look
  const [looked, setLooked] = useState<lookedType>("ALL")
  const [lookeds, setLookeds] = useState<lookedsType>(LOOKEDS)
  const changeLooked = (l: lookedType) => {
    setLooked(l)
  }

  //selected subject
  const [subject, setSubject] = useState<SubjectName>("Alphabets and phonics")
  const changeSubject = (s: SubjectName) => {
    setSubject(s)
  }

  //value to provide
  const value = {
    looked, lookeds,
    changeLooked,
    subject, changeSubject,
  }

  return (
    <LecturesContext.Provider value={value}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>

          {/* space on top */}
          <View style={{ height: 50 }}></View>

          {/* selecting look */}
          <Selector />

          {/* selecting subject */}
          <SubjectSelector />

          {/* courses display */}
          <Courses />

        </View>
      </ScrollView>
    </LecturesContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

});
