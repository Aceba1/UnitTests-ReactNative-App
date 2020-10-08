import { StatusBar as Toast } from 'expo-status-bar';
import React from 'react';
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


export default function App() {
  StatusBar.setHidden(true);
  const {landscape} = useDeviceOrientation();
  console.log(useDimensions());

  const handlePress = () => {
    console.log("I've been tapped!")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click Me" onPress={
        () => Alert.alert("My title", "My message", [
          {text:"Yes", onPress: () => {
            console.log("Press yes");
          }}, 
          {text:"No", onPress: () => {
            console.log("Press not yes");
          }}])}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#888',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  text: {
    fontSize: 32
  }
});
