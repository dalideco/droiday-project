/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Signup: undefined; 
  PasswordSelect: undefined; 
  Login: undefined; 
  PhoneNumber:undefined;
  SendNotif: undefined;
  Loading: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Home: undefined;
  Lectures: undefined;
  Profile: undefined
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

//looked
export type lookedType = "ALL"|"STUDYING"|"SAVED"
export type lookedsType = {
  name: lookedType, 
  courses: any[]
}[]

//subject
export type SubjectName = "Alphabet and phonics"| "Numbers" | "Computer Science"
export type Subject = {
  name: SubjectName,
  image ?:any
}

//courses 
export type Section = {
  name: string, 
  description: string, 
  completed : boolean ,
}
export type Course = {
  name: string, 
  sections:Section[],
  subjectName: SubjectName,
  studying: boolean,
  saved: boolean, 
}

//badges
export type Badge = {
  name: string,
  description: string, 
  image: any
}

//friends
export type Friend = {
  name: string,
  xp: number,
  image: any,
}

// multiple inputs component
export type InputCaseType = {
  key: string,
  value: string,
  RightComponent?: (props: any) => JSX.Element
}