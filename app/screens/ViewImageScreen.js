import React, { memo } from 'react'
import { Alert, Image, StyleSheet, View } from 'react-native'

import colors from '../config/colors'

function ViewImageScreen(props) {
  return (
    <View>
      <Image resize='contain' style={styles.image} source={{
        uri:"https://picsum.photos/1000/1000/",
        width: 100,
        height: 100
      }} />
      <View style={styles.closeIcon} onTouchEndCapture={props.next}></View>
      <View style={styles.deleteIcon} onTouchEndCapture={() => 
        Alert.prompt("Delete", "Do the thing?", [{
          text: "Mmm Yes", onPress: () => {
            props.next()
        }}, {
          text: "No", onPress: () => {
            // Nothing
        }}])}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30
  },
  image: {
    width: '100%',
    height: '100%',
  }
})

export default ViewImageScreen
