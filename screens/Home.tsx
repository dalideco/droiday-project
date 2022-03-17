import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, ScrollView, InputWithButton } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Dimensions } from 'react-native';
import { TextInput } from '../components/Themed';
import { Button } from '../components/Themed';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Hi, Sirajeddine</Text>
        <Text>
          Ready to learn something today?
        </Text>
        <Text>
          Search in the box below.
        </Text>
        
        <InputWithButton>
        </InputWithButton>


        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
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
