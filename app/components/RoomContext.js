import React, { createContext, useState } from 'react'
import { View, Text } from 'react-native'

import SecureStorage from 'expo-secure-store'

export const RoomsContext = createContext();

SecureStorage.getItemAsync()

export default function RoomContextProvider(props) {

  const [rooms, setRooms] = useState([
    {id: 101, renter: null, price: 50 },
    {id: 102, renter: null, price: 60 },
    {id: 103, renter: null, price: 70 },
    {id: 104, renter: null, price: 80 },
    {id: 201, renter: null, price: 55 },
    {id: 202, renter: null, price: 65 },
    {id: 203, renter: null, price: 75 },
    {id: 204, renter: null, price: 85 },
  ])

  return (
    <RoomsContext.Provider value={{rooms, setRooms}}>
      {props.children}
    </RoomsContext.Provider>
  )
}
