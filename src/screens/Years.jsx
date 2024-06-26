import {
   View,
   Text,
   ScrollView,
   ActivityIndicator,
   useWindowDimensions,
} from "react-native"
import { Image } from "expo-image"

import useAPI from "@/src/hooks/useAPI"
import ScreenTitle from "@/src/components/app/ScreenTitle"
import HeaderDrawer from "@/src/layouts/HeaderDrawer"
import RenderHtml from "@/src/components/app/RenderHtml"

const placeholder = require("@/assets/images/placeholder.png")

export default function Screen() {
   //const { data, isLoading, error } = useAPI("GET", "pages/slug/about", "")

   return (
      <>
         <HeaderDrawer />

         <ScrollView className="flex-1 bg-white">
            <ScreenTitle title="The Book" />

            <Image
               source={{
                  uri: "https://www.farmprod.be/content/images/size/w600/2021/07/bandeFP-1.jpg",
               }}
               className="w-full h-36"
               placeholder={placeholder}
               placeholderContentFit="cover"
               transition={500}
            />

            <View className="py-5">
               <Text className="text-center text-lg">The Book</Text>
               <Text className="text-center text-sm">
                  The book will be available soon
               </Text>
            </View>
         </ScrollView>
      </>
   )
}
