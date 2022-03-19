import { StyleSheet } from 'react-native';
import SubjectCard3 from '../components/SubjectCard3';
import SubjectCard2 from '../components/SubjectCard2';
import { Dimensions } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, ScrollView } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{
        width: Dimensions.get('window').width,
        // backgroundColor:'red'
      }}>
        <SubjectCard2
          title="Alphabet and phonics"
          thumbnail="Science"
          total={8}

        />
        <SubjectCard2
          title="Numbers"
          thumbnail="Numbers"
          total={8}
        />
        <SubjectCard2
          title="Computer Science"
          thumbnail="Numbers"
          total={8}
        />
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SubjectCard3
          subject="Alphabet and phonics"
          progress={50}
          total={8}
        />
        <SubjectCard3
          subject="Alphabet and phonics"
          progress={0}
          total={8}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
