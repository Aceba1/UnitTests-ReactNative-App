import React from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { RoomsContext } from './RoomContext'

export default function RoomsList() {
  const {rooms, setRooms} = useContext(RoomsContext);
  return (
    <FlatList data={Object.keys(rooms)} renderItem={RoomItem}>

    </FlatList>
  )
}
