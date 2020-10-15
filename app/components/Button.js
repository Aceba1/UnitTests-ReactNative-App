import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback, Platform, TouchableHighlight } from 'react-native'
import colors from '../config/colors';

const isAndroid = Platform.OS === "android";

export default function Button(props) {
  const FeedbackType = isAndroid ? TouchableNativeFeedback : TouchableHighlight
  
  return (
    <FeedbackType onPress={props.onPress}>
      <View style={{...styles.button, ...props.buttonStyle}}>
        <Text style={{...styles.text, ...props.textStyle}}>{props.text}</Text>
      </View>
    </FeedbackType>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.primary,
  },
  text: {
    fontSize: 20,
    color: colors.white,
    textAlign: "center",
  }
})
