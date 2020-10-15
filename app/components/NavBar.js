import React from 'react'
import { Image, StyleSheet, Text, View, view } from 'react-native'
import colors from '../config/colors'
import Button from './Button'

export default function NavBar(props) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/CareerDevs logo.png")} />
      <View style={styles.navBar}>
        <Button text="Rental" onPress={() => console.log("Pressed Rental!")} 
          buttonStyle={{...styles.navButton,
            ...(props.page === "rental" ? styles.active.button : styles.inactive.button)}} 
          textStyle={styles.text} />

        <Button text="Return" onPress={() => console.log("Pressed Return!")} 
          buttonStyle={{...styles.navButton,
            ...(props.page === "return" ? styles.active.button : styles.inactive.button)}} 
          textStyle={styles.text} />

        <Button text="Balance" onPress={() => console.log("Pressed Balance!")} 
          buttonStyle={{...styles.navButton,
            ...(props.page === "balance" ? styles.active.button : styles.inactive.button)}} 
          textStyle={styles.text} />
      </View>
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