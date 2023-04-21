import { View, Text ,FlatList, TouchableOpacity,Image } from 'react-native'
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons'
 const data =[
{
    id:"123",
    title: "Get a ride",
    image: "http://links.papareact.com/3pn",
    screen: "MapScreen"
},
{
    id:"456",
    title: "Order food",
    image: "http://links.papareact.com/28w",
    screen: "EatsScreen"
}

 ]
const NavOptions = () => {
  return (
   <FlatList
     data={data}
     horizontal
     keyExtractor={(item) => item.id}
     renderItem={({item}) =>(
         <TouchableOpacity style={tw`p-2 pl-6 pb-8 bg-gray-200 m-2 w-40`}>
           <View>
               <Image
               style={{width:120,height:120,resizeMode:"contain"}}
                   source={{url:item.image}}
               />
               <Text style={tw`mt-2 text-lg font-semibold `}>{item.title}</Text>
               <Icon name="arrowright" color="white" type="antdesign"/>
           </View>

         </TouchableOpacity>
   )}

   />
       
)}

export default NavOptions
