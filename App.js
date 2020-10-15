import { StatusBar as Toast } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Platform, 
  StatusBar, 
  SafeAreaView} from 'react-native';
import NavBar from './app/components/NavBar';
import { colors }  from './app/config/theme';

const isAndroid = Platform.OS === "android";

export default function App() {
//  StatusBar.setHidden(true);
  //const [home, setHome] = useState(true)

  if (isAndroid)
    StatusBar.setBackgroundColor(colors.navbar);
  StatusBar.setBarStyle("light-content")

  return (
    <SafeAreaView style={styles.container}>
      <NavBar page="return"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: isAndroid ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  text: {
    fontSize: 32
  }
});
