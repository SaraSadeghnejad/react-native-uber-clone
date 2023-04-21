import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={tw`text-red-500`}>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen;
