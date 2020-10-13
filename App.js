import { StatusBar as Toast } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Platform, 
  StatusBar, 
  Alert,
  Text,
  SafeAreaView} from 'react-native';
import Button from './app/components/Button';

const isAndroid = Platform.OS === "android";

export default function App() {
//  StatusBar.setHidden(true);
  const [home, setHome] = useState(true)

  return (
    <SafeAreaView style={styles.container}>
      <Button text="Press me!" onPress={() => Alert.alert("Critical Exception", "Reinstall OS?", [{
        text: "ok?",
        onPress: () => {
          alert("Flashing to "+(isAndroid?"Apple IOS":"Android OS")+" in 15s...");
        }
      }])} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: isAndroid ? StatusBar.currentHeight : 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 32
  }
});
