import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
    <View>
    <Image
      <Text style={tw`text-red-500 p-10`}>HomeScreen</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;
