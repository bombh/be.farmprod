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

const image = require("@/assets/images/team.jpg")

export default function Screen() {
   //const { data, isLoading, error } = useAPI("GET", "pages/slug/about", "")

   return (
      <>
         <HeaderDrawer />

         <ScrollView className="flex-1 bg-white">
            <ScreenTitle title="20 years" />

            <Image
               source={image}
               className="w-full h-36"
               // placeholder={placeholder}
               // placeholderContentFit="cover"
               // transition={500}
            />

            <View className="bg-black m-5 px-5 py-3">
               <Text className="text-lg text-white text-center">The Book</Text>
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

            <View className="bg-black m-5 px-5 py-3">
               <Text className="text-lg text-white text-center">The Expo</Text>
            </View>

            <Text className="text-base text-justify mx-5 px-5 py-2 mb-5">
               An immersive experience within Brussels and (inter)national urban
               painting scene that offered to see and live two decades of the
               life of the collective historical members, dedicated to their
               art, friendship and passion.
            </Text>
            <Text className="text-base text-justify mx-5 px-5 py-2 mb-10">
               Highlights allowed anyone to meet and get to know the artists
               throug the month during concerts but also workshops and tours, in
               collaboration with Fais le trottoir asbl, IceScreen collective,
               Maison des Cultures et de la Cohésion Sociale de Molenbeek, and
               many more.
            </Text>
         </ScrollView>
      </>
   )
}
