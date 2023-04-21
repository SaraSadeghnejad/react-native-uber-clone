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
         <TouchableOpacity style={tw`p-2 pt-6 `}>
           <View>
               <Image
               style={{width:120,height:120,resizeMode:"contain"}}
                   source={{url:item.image}}
               />
               <Text>{item.title}</Text>
           </View>

         </TouchableOpacity>
     )

   />
       
  )
}

export default navOptions
