import { View, Text } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native'
import { selectTravelTimeInformation } from '../slices/navSlice'
 const data =[
    {
        id:"uber-x-123",
        title:"UberX",
        multiplier:1,
        image:""
    },
    {
        id:"uber-x-456",
        title:"Uber XL",
        multiplier:1.2,
        image:""
    },
    {
        id:"uber-x-789",
        title:"Uber LuX",
        multiplier:1.75,
        image:""
    }
 ]
 const SURGE_CHANGE_RATE=1.5;
const RideOptionsCard = () => {
    const navigation = useNavigation()
    const [selected,setSelected] = useState(null);
    const travelTimeInformation= useSelector(selectTravelTimeInformation);
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
    <View>
        <TouchableOpacity
         onPress={()=>navigation.navigate("NavigationCard")}
         style={tw`absolute top-3 left-5 p-3 rounded-full`}>
            <Icon name="chevron-left" type="fontawsome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`} >Select a Ride -{travelTimeInformation?.distance?.text}</Text>
    </View>
      <FlatList 
       data={data}
       keyExtractor={(item)=>item.id}
       renderItem={({item:{id,title,multiplier,image}},item)=>(
           <TouchableOpacity 
           onPress={()=>setSelected(item)}
           style={tw`flex-row items-center justify-between px-10 ${id===selected&&'bg-gray-200'}`}>
           <Image 
            style={{
                width:100,
                height:100,
                resizeMode: 'contain'
            }}
            source={{uri:image}}
           />
            <View style={tw`-ml-6`}>
            <Text style={tw`text-xl font-semibold`}>{title}</Text>
            <Text style={tw`text-center`}>{travelTimeInformation?.duration?.text} Travel Time</Text>
            </View>
            <Text style={tw`text-xl`}>{new intl.NumberFormat('en-gb',{
                style:"currency",
                currency:"GBP"
            }).format(
               (travelTimeInformation?.duration.value*SURGE_CHANGE_RATE*multiplier)/100 
            )}</Text>
           </TouchableOpacity>
       )}
      />
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity disabled={!selected} style={tw`py-3 m-3 bg-black ${!selected&&"bg-gray-300"}`}>
            <Text style={tw`text-xl text-white text-center`}>
                Choose {selected?.title}
            </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard