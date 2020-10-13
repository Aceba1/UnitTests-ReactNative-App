import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback, Platform, TouchableHighlight } from 'react-native'

const isAndroid = Platform.OS === "android";

export default function Button(props) {
  const FeedbackType = isAndroid ? TouchableNativeFeedback : TouchableHighlight
  
  return (
    <FeedbackType onPress={props.onPress}>
      <View style={{...styles.button, ...props.buttonstyle}}>
        <Text style={{...styles.text, ...props.textStyle}}>{props.text}</Text>
      </View>
    </FeedbackType>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#aceba1',
    borderRadius: 5
  },
  text: {
    fontWeight: 'bold',
    color: '#3e6637'
  }
})
