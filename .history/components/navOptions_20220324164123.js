import { View, Text} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-web'

const navOptions = () => {
  return (
   <FlatList
     data={data}
     horizontal
     keyExtractor={(item) => item.id}

   />
       
  )
}

export default navOptions
