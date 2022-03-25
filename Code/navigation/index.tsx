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
import { ThemeProvider, useTheme } from '../contexts/Theme';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import Home from '../screens/Home';
import Lectures from '../screens/Lectures';
import Profile from '../screens/Profile'
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { Text, useThemeColor } from '../components/Themed';
import { StyleSheet } from 'react-native';
import Signup from '../screens/Signup';
import PasswordSelect from '../components/signup/PasswordSelect';
import Login from '../components/signup/Login';
import PhoneNumber from '../components/signup/PhoneNumber';
import SendNotif from '../components/signup/SendNotif';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { UserProvider } from '../contexts/User';
import Loading from '../screens/Loading';
import Settings from '../components/profile/Settings';
import { StatusBar } from 'expo-status-bar';
import DailyGoals from '../components/home/DailyGoals';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Navigation() {
  const {theme} = useTheme()
  const backgroundColor = useThemeColor({},"background")
  return (
    <UserProvider>
      <SafeAreaView style={{ flex: 0, backgroundColor: backgroundColor }} />
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={(theme==="dark")?DarkTheme: DefaultTheme}
      >
        <RootNavigator />
      </NavigationContainer>
      <StatusBar style={(theme==="dark")?"light":"dark"} />
      
    </UserProvider>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName='Loading'
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name="Loading" component={Loading}></Stack.Screen>
      <Stack.Screen name="Root" component={BottomTabNavigator}
        options={{
          headerShown: false,
          gestureEnabled: true,
        }}
      />

      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{
        ...TransitionPresets.ModalPresentationIOS
      }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Group>


      {/* signing up */}
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      <Stack.Group screenOptions={{ presentation: "card" }}>
        <Stack.Screen name="PasswordSelect" component={PasswordSelect} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="PhoneNumber" component={PhoneNumber} options={{ headerShown: false }} />
        <Stack.Screen name="SendNotif" component={SendNotif} options={{ headerShown: false }} />
        <Stack.Screen name="DailyGoals" component={DailyGoals}/>
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
  const { theme } = useTheme();
  const lighterColor = useThemeColor({}, "lighterColor")

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[theme].tint,
        tabBarShowLabel: false,
        tabBarStyle: {
          shadowColor: 'black',
          shadowOpacity: 0.15,
          shadowOffset: { width: 0, height: 3 },
          shadowRadius: 10,
          backgroundColor: lighterColor,
          borderTopWidth: 0,
          position: 'absolute',
          elevation: 3,
          height: 60,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        },
      }}

    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Tab One',
          tabBarIcon: (props) => <TabBarIcon name="home" {...props} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[theme].text}
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
          tabBarIcon: (props) => <TabBarIcon name="book" {...props} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: (props) => <TabBarIcon name="user" {...props} />,
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
  focused: boolean;
}
function TabBarIcon({ name, color, focused }: tabBarIconProps) {
  return (
    <View style={tabBarStyle.container}>

      {/* change with svg  */}
      <FontAwesome size={30} style={{ marginBottom: -3 }} name={name} color={color} />

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
