import { StyleSheet } from 'react-native';
import SubjectCard3 from '../components/SubjectCard3';
import SubjectCard2 from '../components/SubjectCard2';
import { Dimensions } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, ScrollView, useThemeColor } from '../components/Themed';
import { TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('screen')

export default function TabTwoScreen() {
  
  const lighterColor = useThemeColor({},'lighterColor')
  const selectedType = "ALL"
  const backgroundColor = useThemeColor({}, "background")

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={{ height: 50 }}></View>
        <View style={[styles.buttonRow,{backgroundColor:lighterColor}]}>
          <TouchableOpacity style={[styles.headerButton,{borderLeftWidth:0}]}>
            <Text style={[styles.textCenter, {
              fontWeight: (selectedType==="ALL")?"700":"400"
            }]}>ALL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.headerButton,{borderLeftColor:backgroundColor}]}>
            <Text style={[styles.textCenter]}>STUDYING</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.headerButton,{borderLeftColor:backgroundColor}]}>
            <Text style={[styles.textCenter]}>SAVED</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{ width }}
        >
          <SubjectCard2
            title="Alphabet and phonics"
            thumbnail="Science"
            selected
            total={8}
          />
          <SubjectCard2
            title="Alphabet and phonics"
            thumbnail="Science"
            total={8}
          />
          <SubjectCard2
            title="Alphabet and phonics"
            thumbnail="Science"
            total={8}
          />
          <SubjectCard2
            title="Alphabet and phonics"
            thumbnail="Science"
            total={8}
          />
        </ScrollView>

        <View>
          <SubjectCard3
            subject="Alphabet and phonics"
            progress={50}
            total={8}
          />
          <SubjectCard3
            subject="Alphabet and phonics"
            progress={50}
            total={8}
          />
          <SubjectCard3
            subject="Alphabet and phonics"
            progress={50}
            total={8}
          />
          <SubjectCard3
            subject="Alphabet and phonics"
            progress={50}
            total={8}
          />
          <SubjectCard3
            subject="Alphabet and phonics"
            progress={50}
            total={8}
          />
        </View>

      </View>
    </ScrollView>
  );
}


{/* <SubjectCard3
            subject="Alphabet and phonics"
            progress={50}
            total={8}
          /> */}
{/* <SubjectCard2
            title="Alphabet and phonics"
            thumbnail="Science"
            total={8}

          /> */}


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
  buttonRow: {
    backgroundColor:'red',
    display:'flex',
    flexDirection:'row',
    borderRadius:15,
    overflow: "hidden"
  },
  headerButton: {
    padding: 15,
    width: 110,
    textAlign:'center',
    borderLeftWidth: 2
  },
  textCenter:{
    textAlign:'center'
  }
});
