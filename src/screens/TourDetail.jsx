import { ActivityIndicator, Linking, Platform, Pressable, Text, View } from "react-native"
import { Image } from "expo-image"
import { useLocalSearchParams } from "expo-router"
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps"
import HeaderBack from "@/src/layouts/HeaderBack"
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from "@gorhom/bottom-sheet"
import { FontAwesome6 } from "@expo/vector-icons"
import { useCallback, useMemo, useRef, useState } from "react"
import useFetch from "@/src/hooks/useFetch"
import ScreenTitle from "../components/app/ScreenTitle"
import { SafeAreaView } from "react-native-safe-area-context"

const mapStyle = require("@/src/data/mapStyle.json")
const placeholder = require("@/assets/images/placeholder.png")
const logo_fresh = require("@/assets/images/logo_fresh.png")
const logo_kosmo = require("@/assets/images/logo_kosmo.png")

export default function Screen() {
   // States
   const [place, setPlace] = useState({})

   // Get route params
   const params = useLocalSearchParams()
   const { id } = params

   // Fetch data
   const { data, isLoading, error } = useFetch(`app/data/places.${id}.json`)

   //isLoading ? console.log("Loading...") : console.log(data.param)

   // Handle map's marker press
   const handleMarkerPress = (point) => {
      // Open bottom sheet
      switch (point.group) {
         case "fpolln":
            point.logo = logo_fresh
            break
         case "kosmo15":
            point.logo = logo_kosmo
            break
         case "kosmo12":
            point.logo = logo_kosmo
            break
         default:
            point.logo = null
      }

      setPlace(point)
      bottomSheetRef.current?.snapToIndex(0)
   }

   // Open Maps app
   const openURL = (point) => {
      const scheme = Platform.select({
         ios: "maps://0,0?q=",
         android: "geo:0,0?q=",
      })
      const latLng = `${point.geo.lat},${point.geo.lng}`
      const label = encodeURIComponent(point.place)
      const url = Platform.select({
         ios: `${scheme}${label}@${latLng}`,
         android: `${scheme}${latLng}(${label})`,
      })

      Linking.openURL(url)
   }

   // Bottom sheet
   const bottomSheetRef = useRef(null)
   const snapPoints = useMemo(() => ["75%"], [])

   // Render backdrop for Bottom Sheet
   const renderBackdrop = useCallback(
      (props) => (
         <BottomSheetBackdrop
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            {...props}
         />
      ),
      []
   )

   return (
      <>
         <HeaderBack />

         {isLoading ? (
            <SafeAreaView className="flex-1 px-5 pt-16 bg-white">
               <ScreenTitle title="Tours" />
               <ActivityIndicator
                  className="pt-16"
                  size="large"
                  color="#000000"
               />
            </SafeAreaView>
         ) : (
            // TODO: Add animateCamera to map
            <View className="flex-1">
               <MapView
                  className="w-full h-full"
                  provider={PROVIDER_GOOGLE}
                  initialRegion={{
                     latitude: data.param.mapCenter.lat,
                     longitude: data.param.mapCenter.lng,
                     latitudeDelta: data.param.delta,
                     longitudeDelta: data.param.delta,
                  }}
                  cacheEnabled={true}
                  customMapStyle={mapStyle}
                  showsUserLocation
                  // showsMyLocationButton
               >
                  {data.points.map((point, index) => (
                     <Marker
                        onPress={() => handleMarkerPress(point)}
                        key={index}
                        coordinate={{
                           latitude: point.geo.lat,
                           longitude: point.geo.lng,
                        }}
                        tracksViewChanges={false}
                        pinColor={
                           point.group === "fpolln"
                              ? "black"
                              : point.group === "kosmo12"
                              ? "turquoise"
                              : point.group === "kosmo15"
                              ? "tomato"
                              : point.group === "statue"
                              ? "indigo"
                              : "yellow"
                        }
                     ></Marker>
                  ))}
               </MapView>
            </View>
         )}

         <BottomSheet
            snapPoints={snapPoints}
            ref={bottomSheetRef}
            index={-1}
            enablePanDownToClose={true}
            backdropComponent={renderBackdrop}
            backgroundStyle={{ backgroundColor: "#333" }}
            handleComponent={null}
         >
            <BottomSheetView className="relative bg-white rounded-xl rounded-b-none">
               {/* Image */}
               <Image
                  source={{
                     uri: `https://map.farmprod.be/street-art-map-olln/public/img/art/${place.image}`,
                  }}
                  className="w-full h-full rounded-xl rounded-b-none"
                  placeholder={placeholder}
                  placeholderContentFit="cover"
                  transition={500}
               />

               {/* Text */}
               <View className="bg-black/60 absolute m-0 p-5 pb-12 w-full rounded-xl rounded-b-none bottom-0">
                  {place.logo && (
                     <Image
                        source={place.logo}
                        className="w-28 h-28 mx-auto mb-4"
                     />
                  )}
                  <Text className="text-white text-center text-xl">{place.name}</Text>

                  <Text className="text-white text-center mt-2 text-md">{place.place}</Text>

                  {place.comment && <Text className="text-white text-center mt-2 text-xs">{place.comment}</Text>}
               </View>

               {/* Indicator line */}
               <View className="flex absolute top-2 items-center w-full">
                  <View className="bg-white/50 w-12 h-1 rounded-sm"></View>
               </View>

               {/* Open Maps app */}
               <Pressable
                  onPress={() => openURL(place)}
                  className="absolute bg-black/70 active:bg-black top-5 right-5 w-16 h-16 rounded-full flex items-center justify-center"
               >
                  <FontAwesome6
                     name="person-walking-arrow-right"
                     size={28}
                     color="white"
                  />
               </Pressable>
            </BottomSheetView>
         </BottomSheet>
      </>
   )
}
