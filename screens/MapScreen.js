import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack';
import NavigationCard from '../components/NavigationCard';
const MapScreen = () => {
  const Stack = createStackNavigator()
  return (
    <View>
      <Text>mapScreen</Text>
      <View style={tw`h-1/2`}>
       <Map />

      </View>
      <View style={tw`h-1/2`}>
   <Stack.Navigator>
    <Stack.Screen
      name="NavigationCard"
      component={NavigationCard}
      options={{
        headerShow: false,
      }}
    />
     <Stack.Screen
      name="RideOptionsCard"
      component={RideOptionsCard}
      options={{
        headerShow: false,
      }}
    />
   </Stack.Navigator>
</View>
    </View>
  )
}

export default MapScreen