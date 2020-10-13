import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'

import colors from '../config/colors'

function WelcomeScreen(props) {
  return (
    <ImageBackground 
    style={styles.background}
    source={{
      uri:"https://picsum.photos/1000/1000/",
      width:1000,
      height:1000
    }}>
      <View style={styles.logoContainer}>
        <Image style={styles.logoImage} source={{
          uri:"https://picsum.photos/100/100/",
          width:100,
          height:100
        }}/>
        <Text style={styles.logoText}>Stuff</Text>
      </View>
      <View onTouchEndCapture={props.next} style={styles.loginButton}></View>
      <View onTouchEndCapture={props.next} style={styles.registerButton}></View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    //alignSelf: "stretch",
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary
  },
  logoImage: {
    width: 100,
    height: 100,
    borderRadius: 30
  },
  logoContainer: {
    padding:10,
    alignItems: "center",
    position: "absolute",
    backgroundColor: '#fff4',
    borderRadius: 10,
    top: 70,
  },
  logoText: {
    fontSize: 30
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary
  }
})

export default WelcomeScreen;
