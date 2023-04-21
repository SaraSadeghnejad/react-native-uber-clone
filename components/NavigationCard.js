import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
const NavigationCard = () => {
    const dispatch =useDispatch();
    const navigation= useNavigation()
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>NavigationCard</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
            <GooglePlacesAutocomplete 
                  placeholder="where to?"
                  nearbyPlacesAPI="GooglePlacesSearch"
                  debounce={400}
                  styles={toInputBoxStyles}
                  fetchDetails={true}  
                 returnKeyType={"search"}
                enablePoweredByContainer={false}
                onPress={(data, details = null) => {
       dispatch(setDestination({
        location:details.geometry.location,
        description:data.description
       }))
      navigation.navigate("RideOptionsCard")
    }}
                query={{
        key: GOOGLE_MAPS_APIKEY ,
        language:'en',
    }}
            />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NavigationCard
const toInputBoxStyles = StyleSheet.create({
    container: {
       backgroundColor:"white",
       paddingTop:20,
       flex:0
    },
    textInput:{
          backgroundColor:"#00000F",
          borderRadius:0,
          fontSize:18
    },
      textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0
      }

    
})