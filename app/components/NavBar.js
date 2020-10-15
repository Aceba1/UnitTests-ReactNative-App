import React from 'react'
import { StyleSheet, Text, View, view } from 'react-native'
import colors from '../config/colors'

export default function NavBar() {
  return (
    <View>
      <Image></Image>
      <Text></Text>
    </View>
  )
}

const styles = {
  ...StyleSheet.create({
    container: {
      position: "absolute",
      top: 0,
      backgroundColor: colors.navbar,
      width: "100%"
    },
    navBar: {
      justifyContent: "space-around",
      flexDirection: "row"
    },
    navButton: {
      paddingVertical: 4,
      paddingHorizontal: 16,
      height: 30,
      width: 150,
    },
    navText: {
      color: colors.white,
      fontSize: 20,
      flex: 1,
      textAlign: "center",
    }
  }),
  active: StyleSheet.create({ // Active
    button: { // Button
      backgroundColor: colors.primary
    }
  }),
  inactive: StyleSheet.create({ // Inactive
    button: { // Button
      backgroundColor: colors.fadedPrimary
    }
  })
}