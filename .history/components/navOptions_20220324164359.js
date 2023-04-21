import { View, Text} from 'react-native'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native-web'

const navOptions = () => {
  return (
   <FlatList
     data={data}
     horizontal
     keyExtractor={(item) => item.id}
     renderItem={({item}) =>(
         <TouchableOpacity>
           <View>
               <Image
               style
                   source={{url:item.image}}
               />
           </View>

         </TouchableOpacity>
     )

   />
       
  )
}

export default navOptions
