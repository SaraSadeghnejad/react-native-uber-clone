import { View, Text,SafeAreaView,Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import n
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
        url: "https://links.papareact.com/gzs",
    }}
    />
    
      </View>
      <navOptions />
    </SafeAreaView>
  )
}

export default HomeScreen;
