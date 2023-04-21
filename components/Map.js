import { View, Text } from 'react-native'
import React from 'react'
import MapView,{Marker} from "react-native-maps"
const Map = () => {
  return (
    <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
  )
}

export default Map