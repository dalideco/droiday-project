/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  View as DefaultView, ScrollView as DefaultScroll,
  ScrollViewProps, TextInput as DefaultInput,
  TextInputProps, ButtonProps,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function ScrollView(props: ScrollViewProps) {
  const { style, ...otherProps } = props;
  const backgroundColor = useThemeColor({}, 'background');
  return <DefaultScroll style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function TextInput(props: TextInputProps) {
  const { style, ...otherProps } = props;
  const backgroundColor = useThemeColor({}, 'lighterColor');
  return <DefaultInput style={[{
    backgroundColor,
    fontSize: 20,
    paddingTop: 15,
    paddingLeft: 10,
    paddingBottom: 15,
    width: '100%',
    borderRadius: 15,
    elevation: 3,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  }, style]} {...otherProps}>
  </DefaultInput>
}

interface ButtonProps extends TouchableOpacityProps {
  textStyle?: any
}

export function Button(props: ButtonProps) {
  const { style, children, textStyle, ...otherProps } = props;
  const backgroundColor = useThemeColor({}, 'tint');
  const textColor = useThemeColor({}, 'background');
  return (
    <TouchableOpacity
      style={[{
        backgroundColor,
        borderRadius: 10,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 60,
        paddingRight: 60,
        elevation: 3,
        shadowColor: 'black',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
      }, style]}
      {...otherProps}
    >
      <Text
        style={[
          {
            color: textColor,
            textAlign:'center'
          },
          textStyle
        ]}
      >{children}</Text>
    </TouchableOpacity>
  )
}

export function ATag(props:ButtonProps){
  const { style, children, textStyle, ...otherProps } = props;
  const tintColor = useThemeColor({}, 'tint');
  return (
    <TouchableOpacity
      style={[{
      }, style]}
      {...otherProps}
    >
      <Text
        style={[
          {
            color: tintColor,
          },
          textStyle
        ]}
      >{children}</Text>
    </TouchableOpacity>
  )
}



export function InputWithButton(props: any) {
  const { style, ...otherProps } = props;
  const backgroundColor = useThemeColor({}, 'lighterColor');
  const tintColor = useThemeColor({}, 'tint')

  return <DefaultView style={[{
    backgroundColor,
    padding: 7,
    paddingLeft: 15,
    borderRadius: 20,
    elevation: 3,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginBottom: 50
  }, style]} {...otherProps}>
    <DefaultInput
      style={{
        fontSize: 20,
        flex: 1
      }}
    ></DefaultInput>
    <TouchableOpacity
      style={{
        backgroundColor: tintColor,
        width: 50,
        height: 50,
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
      }}
    >
      <FontAwesome name="search" color={backgroundColor}>

      </FontAwesome>
    </TouchableOpacity>
  </DefaultView>
}





