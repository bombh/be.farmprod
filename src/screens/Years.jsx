import {
   View,
   Text,
   ScrollView,
   Pressable,
   ActivityIndicator,
   useWindowDimensions,
} from "react-native"
import { Image } from "expo-image"

import useAPI from "@/src/hooks/useAPI"
import ScreenTitle from "@/src/components/app/ScreenTitle"
import HeaderDrawer from "@/src/layouts/HeaderDrawer"
import RenderHtml from "@/src/components/app/RenderHtml"
import colors from "tailwindcss/colors"
import { MaterialIcons } from "@expo/vector-icons"

const images = {
   team: require("@/assets/images/team.jpg"),
   cover: require("@/assets/images/book_cover.jpg"),
   page01: require("@/assets/images/book_01.jpg"),
   page02: require("@/assets/images/book_02.jpg"),
   page03: require("@/assets/images/book_03.jpg"),
   expo01: require("@/assets/images/expo_01.jpg"),
   expo02: require("@/assets/images/expo_02.jpg"),
   expo03: require("@/assets/images/expo_03.jpg"),
   expo04: require("@/assets/images/expo_04.jpg"),
}

export default function Screen() {
   //const { data, isLoading, error } = useAPI("GET", "pages/slug/about", "")

   return (
      <>
         <HeaderDrawer />

         <ScrollView className="flex-1 bg-white">
            <ScreenTitle title="20 years" />

            <Image
               source={images.team}
               className="w-full h-36"
               // placeholder={placeholder}
               // placeholderContentFit="cover"
               // transition={500}
            />

            <View className="bg-black m-5 px-5 py-3">
               <Text className="text-lg text-white text-center">The Book</Text>
            </View>

            <Text className="text-xl text-center mx-5 px-5 py-2">
               IN PAINT WE TRUST - FARM PROD {"\n"}cfc Editions
            </Text>

            <View className="mx-5 p-3">
               <Image
                  source={images.cover}
                  contentFit="contain"
                  className="w-full h-80"
               />
            </View>

            <View className="flex items-center justify-center">
               <Pressable
                  className="flex bg-black w-14 h-14 rounded-full active:bg-red-500 items-center justify-center mb-2"
                  onPress={() => {
                     Linking.openURL(
                        "https://www.maisoncfc.be/fr/products/1349-in-paint-we-trust-farm-prod"
                     )
                  }}
               >
                  <MaterialIcons
                     name="shopping-cart"
                     size={24}
                     color={colors.white}
                  />
               </Pressable>
               <Text className="text-sm text-center mb-5">
                  Buy the Book @ cfc Editions
               </Text>
            </View>

            <Text className="text-base text-justify mx-5 px-5 py-2 mb-5">
               This publication, richly illustrated with rare and original
               documents traces the history of Farm Prod, a collective of
               cosmopolitan street artists.
            </Text>

            <Text className="text-base text-justify italic mx-5 px-5 py-2 mb-5">
               Twenty years ago, a group of graphic communications students
               decided to share a living and working space by moving into an
               isolated farmhouse that quickly became a buzzing hive of
               creativity. It's the birth of one of the most original groups in
               urban art in recent years. From squats to artists' studios, we
               follow the progress of a close-knit team capable of regularly
               reinventing itself to meet the challenges of an artistic career
               moving from spontaneous art to official commissions, without ever
               losing its singular aesthetic and its sense of friendship...
            </Text>

            <Text className="text-base text-justify mx-5 px-5 py-2 mb-5">
               THANK YOU to Maison cfc Editions for the support and the great
               collaboration throughout the long process ; to Collin Hotermans
               for the graphic design and Éric Van Essche for the texts.
            </Text>

            <View className="mx-5 mb-5">
               <Image className="w-full aspect-video" source={images.page01} />
            </View>

            <View className="mx-5 mb-5">
               <Image className="w-full aspect-video" source={images.page02} />
            </View>

            <View className="mx-5 mb-5">
               <Image className="w-full aspect-video" source={images.page03} />
            </View>

            <View className="bg-black m-5 px-5 py-3">
               <Text className="text-lg text-white text-center">The Expo</Text>
            </View>

            <Text className="text-base text-justify mx-5 px-5 py-2 mb-5">
               An immersive experience within Brussels and (inter)national urban
               painting scene that offered to see and live two decades of the
               life of the collective historical members, dedicated to their
               art, friendship and passion.
            </Text>

            <View className="flex items-center justify-center">
               <Pressable
                  className="flex bg-black w-14 h-14 rounded-full active:bg-red-500 items-center justify-center mb-2"
                  onPress={() => {
                     Linking.openURL(
                        "https://www.facebook.com/media/set/?set=a.903700701758943&type=3"
                     )
                  }}
               >
                  <MaterialIcons
                     name="photo-camera"
                     size={24}
                     color={colors.white}
                  />
               </Pressable>
               <Text className="text-sm text-center mb-5">
                  See the Expo @ Facebook
               </Text>
            </View>

            <Text className="text-base text-justify mx-5 px-5 py-2 mb-10">
               Highlights allowed anyone to meet and get to know the artists
               throug the month during concerts but also workshops and tours, in
               collaboration with Fais le trottoir asbl, IceScreen collective,
               Maison des Cultures et de la Cohésion Sociale de Molenbeek, and
               many more.
            </Text>

            {/* Images */}
            <View className="mx-5 mb-5">
               <Image className="w-full aspect-video" source={images.expo01} />
            </View>
            <View className="mx-5 mb-5">
               <Image className="w-full aspect-video" source={images.expo02} />
            </View>
            <View className="mx-5 mb-5">
               <Image className="w-full aspect-video" source={images.expo04} />
            </View>
            <View className="mx-5 mb-10">
               <Image className="w-full aspect-video" source={images.expo03} />
            </View>
         </ScrollView>
      </>
   )
}
