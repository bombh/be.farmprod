import { View, Text } from "react-native"
import { Image } from "expo-image"

const placeholder = require("@/assets/images/placeholder.png")

const ArtistCard = (props) => {
   const { name, profile_image } = props

   return (
      <View className="mb-5">
         <View className="flex-row items-center justify-center">
            <View className="w-44 h-44 rounded-full bg-neutral-200">
               <Image
                  source={{ uri: profile_image }}
                  className="w-44 h-44 rounded-full border border-black"
                  placeholder={placeholder}
                  placeholderContentFit="cover"
                  transition={500}
               />
            </View>
         </View>
         <View className="p-2">
            <Text
               numberOfLines={1}
               className="text-black font-semibold text-lg text-center"
            >
               {name}
            </Text>
         </View>
      </View>
   )
}

export default ArtistCard
