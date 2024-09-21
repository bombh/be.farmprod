import { View, Text, Dimensions } from "react-native"
import { Image } from "expo-image"
import { MotiView } from "moti"
import { Easing } from "react-native-reanimated"

const placeholder = require("@/assets/images/placeholder.png")

const ArtistCard = ({ name, profile_image, index }) => {
   const anim =
      index < 4
         ? {
              from: {
                 opacity: 0,
                 translateX: -Dimensions.get("window").width,
              },
              animate: {
                 opacity: 1,
                 translateX: 0,
              },
              transition: {
                 type: "timing",
                 duration: 600,
                 delay: index * 300,
                 easing: Easing.elastic(1),
              },
           }
         : {}

   return (
      <MotiView {...anim}>
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
         <View className="p-2 mb-5">
            <Text
               numberOfLines={1}
               className="text-black font-semibold text-lg text-center"
            >
               {name}
            </Text>
         </View>
      </MotiView>
   )
}

export default ArtistCard
