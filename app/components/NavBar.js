import React from 'react'
import { Image, StyleSheet, Text, View, view } from 'react-native'
import colors from '../config/colors'
import Button from './Button'
import RentalScreen from '../screens/RentalScreen'
import ReturnScreen from '../screens/ReturnScreen'
import BalanceScreen from '../screens/BalanceScreen'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native'

const Tab = createMaterialTopTabNavigator();

export default function NavBar(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Rental" component={RentalScreen} />
        <Tab.Screen name="Return" component={ReturnScreen} />
        <Tab.Screen name="Balance" component={BalanceScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = {
  ...StyleSheet.create({
    container: {
      position: "absolute",
      top: 0,
      backgroundColor: colors.navbar,
      width: "100%",
      alignContent: "center"
    },
    navBar: {
      justifyContent: "space-around",
      flexDirection: "row",
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
      backgroundColor: `#000`,
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