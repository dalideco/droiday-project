/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, View } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import Home from '../screens/Home';
import Lectures from '../screens/Lectures';
import Profile from '../screens/Profile'
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { Text } from '../components/Themed';
import { StyleSheet } from 'react-native';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"

      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarShowLabel: false,
        tabBarStyle: {
          shadowColor: 'black',
          shadowOpacity: 0.15,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 10,
          backgroundColor: '#FFFFFF',
          elevation: 3,
          height: 60,
        }

      }}

    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Tab One',
          tabBarIcon: (props) => <TabBarIcon name="home" {...props} text="Home" />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Lectures"
        component={Lectures}
        options={{
          title: 'Lectures',
          tabBarIcon: (props) => <TabBarIcon name="book" {...props} text="Lectures" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: (props) => <TabBarIcon name="book" {...props} text="Profile" />,
        }}
      />

    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
interface tabBarIconProps {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  text: string;
  focused: boolean;
}
function TabBarIcon({ name, color, text, focused }: tabBarIconProps) {
  return (
    <View style={tabBarStyle.container}>

      {/* change with svg  */}
      <FontAwesome size={30} style={{ marginBottom: -3 }} name={name} color={color} />
      <Text style={[tabBarStyle.text, {
        fontWeight: focused ? "bold" : "normal",
        color: color
      }]}>
        {text}
      </Text>
    </View>
  );
}

const tabBarStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    marginTop: 3,
    fontWeight: 'normal'
  }
})
