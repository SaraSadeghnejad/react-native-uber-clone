import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
    <View></View>
      <Text style={tw`text-red-500 p-10`}>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen;
