import { Image } from "expo-image"
import { useRouter } from "expo-router"
import { MotiView } from "moti"
import { Dimensions, Pressable, Text, View } from "react-native"
import { Easing } from "react-native-reanimated"

const placeholder = require("@/assets/images/placeholder.png")

export default function TourCard({ id, title, img, index }) {
   const router = useRouter()

   const showDetail = () => {
      if (!id) return

      router.navigate({
         pathname: `tours/detail`,
         params: {
            id,
         },
      })
   }

   const anim = {
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
         easing: Easing.elastic(4),
      },
   }

   return (
      <MotiView {...anim}>
         <Pressable
            className="relative mb-5 active:opacity-70"
            onPress={showDetail}
         >
            <Image
               source={{ uri: img }}
               className="w-full h-44"
               placeholder={placeholder}
               placeholderContentFit="cover"
               transition={500}
            />

            <View className="absolute bottom-0 w-full bg-black/70 p-2">
               <Text
                  numberOfLines={1}
                  className="text-white font-semibold text-lg text-center"
               >
                  {title}
               </Text>
            </View>
         </Pressable>
      </MotiView>
   )
}
