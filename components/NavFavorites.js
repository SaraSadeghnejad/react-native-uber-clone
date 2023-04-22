import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-web'
import { TouchableOpacity } from 'react-native'
    const data =[
        {
            id: '123',
            icon: 'home',
            location:"Home",
            destination:"Code Street,London,UK"
    
       },
       {
        id: '456',
        icon: 'briefcase',
        location:"Work",
        destination:"London Eye,London,UK"

   }
    ]
const NavFavorites = () => {

  return (
    <FlatList data={data} keyExtractor={(item) => item.id} renderItem={(item)=>(
     <TouchableOpacity>
        <Text>Yo</Text>
     </TouchableOpacity>
    )} />
  )
}

export default NavFavorites