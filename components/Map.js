import { View, Text } from 'react-native'
import React from 'react'
import MapView,{Marker} from "react-native-maps"
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'
import tw from 'tailwind-react-native-classnames'
const Map = () => {
    const origin = useSelector(selectOrigin)
  return (
    <MapView
    style={tw`flex-1`}
    mapType="nutedStandard"
    initialRegion={{
      latitude: origin.location.lat,
      longitude: origin.location.lng,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }}
  >
  {origin?.location&&(
    <Marker
    coordinate={{
    latitude:origin.location.lat,
    longitude:origin.location.lng,
    }}
  title="Origin"
  description={origin.description}
  identifier="Origin"
   />)}
  </MapView>
  )
}

export default Map