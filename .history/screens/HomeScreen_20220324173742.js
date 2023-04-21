import { View, Text,SafeAreaView,Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions'
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
    <View style={tw`p-5`}>
    <Image 
    style={{
        width:100,
        height:100,
        resizeMode:"contain"
        }}
    source={{
        url: "../",
    }}
    />
     <NavOptions />
      </View>
     
    </SafeAreaView>
  )
}

export default HomeScreen;