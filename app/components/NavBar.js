import React from 'react'
import { Image, StyleSheet, Text, View, view } from 'react-native'
import colors from '../config/theme'
import Button from './Button'
import RentalScreen from '../screens/RentalScreen'
import ReturnScreen from '../screens/ReturnScreen'
import BalanceScreen from '../screens/BalanceScreen'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native'
import theme from '../config/theme'

const Tab = createMaterialTopTabNavigator();

export default function NavBar(props) {
  return (
    <NavigationContainer theme={theme} >
      <Tab.Navigator>
        <Tab.Screen name="Rental" component={RentalScreen} />
        <Tab.Screen name="Return" component={ReturnScreen} />
        <Tab.Screen name="Balance" component={BalanceScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
