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
import NavFavorites from './NavFavorites';
import { Icon } from 'react-native-elements';

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
        <NavFavorites />
      </View>
      <View  style={tw`flex flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity 
        onPress={() =>navigation.navigate("RideOptionsCard")}
        
        style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
        
        >
            <Icon name="car" type="font-awsome" color="white" size={16} />
            <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full`}>
            <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
            <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
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