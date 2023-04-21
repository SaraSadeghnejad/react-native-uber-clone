import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tail'
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