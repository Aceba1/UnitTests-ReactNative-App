import { StatusBar as Toast } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  Dimensions,
  View, 
  StyleSheet, 
  Platform, 
  SafeAreaView, 
  StatusBar, 
  Button, 
  Alert } from 'react-native';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

const isAndroid = Platform.OS === "android";

export default function App() {
//  StatusBar.setHidden(true);
  const [home, setHome] = useState(true)

  return home ? (
    <WelcomeScreen next={() => setHome(false)}/>
  ) : (
    <ViewImageScreen next={() => setHome(true)}/>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: isAndroid ? StatusBar.currentHeight : 0
  },
  text: {
    fontSize: 32
  }
});
