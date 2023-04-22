import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack';
import NavigationCard from '../components/NavigationCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
const MapScreen = () => {
  const Stack = createStackNavigator()
  const navigation = useNavigation()
  return (
    <View>
       <TouchableOpacity 
        onPress={()=>navigation.navigate("HomeScreen")}
       style={tw`shadow-lg z-50 p-3 rounded-full bg-gray-100 absolute top-16 left-8`}>
        <Icon name="menu" />
       </TouchableOpacity>
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