import { View, Text ,FlatList, TouchableOpacity,Image } from 'react-native'
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
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
    const Navigation =useNavigation();
  return (
   <FlatList
     data={data}
     horizontal
     keyExtractor={(item) => item.id}
     renderItem={({item}) =>(
         <TouchableOpacity 
          onPress={navigation=>}
         style={tw`p-2 pl-6 pb-8 bg-gray-200 m-2 w-40`}
         
         >
           <View>
               <Image
               style={{
               width:120,
               height:120}}
                   source={{uri:item.image}}
                   resizeMode={'contain'}
               />
               <Text style={tw`mt-2 text-lg font-semibold `}>{item.title}</Text>
               <Icon  style={tw`p-2 bg-black rounded-full mt-4 w-10`} name="arrowright" color="white" type="antdesign"/>
           </View>

         </TouchableOpacity>
   )}

   />
       
)}

export default NavOptions
