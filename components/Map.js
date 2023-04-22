import { View, Text } from 'react-native'
import React from 'react'
import MapView,{Marker} from "react-native-maps"
import { useSelector } from 'react-redux'
import { selectDestination, selectOrigin } from '../slices/navSlice'
import tw from 'tailwind-react-native-classnames'
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useRef } from 'react'
const Map = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef=useRef(null);
    useEffect(() => {
      if(!origin || !destination)return;
      mapRef.current.fitToSuppliedMarkers(["origin",'destination'], {
        edgePadding:{top:50,right:50,bottom:50,left:50}
      });
    }, [origin,destination])
    
  return (
    <MapView
    ref={mapRef}
    style={tw`flex-1`}
    mapType="nutedStandard"
    initialRegion={{
      latitude: origin.location.lat,
      longitude: origin.location.lng,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }}
  >
  {origin&&destination&&(
     <MapViewDirections
     origin={origin.description}
     destination={destination.description}
     apikey={GOOGLE_MAPS_APIKEY}
     strokeColor='black'
     strokeWidth={3}
      />
  )}
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