import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-tailwind-react-native-classnames'
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen;
export styles = StyleSheet.create({
    text: {
        color:"blue"
    }
})