import { View, ActivityIndicator, Image, Text } from "react-native"
import React from "react"
import colors from "tailwindcss/colors"
import Animated, {
   Easing,
   useAnimatedStyle,
   useSharedValue,
   withRepeat,
   withTiming,
   FadeOutUp,
   FadeIn,
} from "react-native-reanimated"

const logo = require("@/assets/images/logo_128.png")

const duration = 2000
const easing = Easing.bezier(0.25, 0, 0.25, 1)

const Loading = ({ label, hideLogo }) => {
   const sv = useSharedValue(0)

   React.useEffect(() => {
      sv.value = withRepeat(withTiming(1, { duration, easing }), -1)
   }, [])

   const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ rotate: `${sv.value * 360}deg` }],
   }))

   return (
      <Animated.View
         entering={FadeIn}
         exiting={FadeOutUp}
         className="flex-1 items-center justify-center px-5 pb-32"
      >
         {!hideLogo && (
            <>
               <Animated.View style={animatedStyle}>
                  <Image
                     source={logo}
                     className=""
                  />
               </Animated.View>
               <View className="h-8" />
            </>
         )}
         <ActivityIndicator
            className=""
            size="large"
            color={colors.neutral[500]}
         />
         <Text className="mt-2 text-neutral-500">{label ? label : "Loading"}</Text>
      </Animated.View>
   )
}

export default Loading
