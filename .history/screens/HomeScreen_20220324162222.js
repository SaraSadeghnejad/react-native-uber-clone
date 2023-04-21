import { View, Text,SafeAreaView,Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
    <View>
    <Image 
    style={{width:100,height:100,resi}}
    source={{
        url: 'https://links-papareact.com/gzs'
    }}
    />
      <Text style={tw`text-red-500 p-10`}>HomeScreen</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;
