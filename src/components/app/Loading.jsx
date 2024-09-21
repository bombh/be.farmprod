import { View, ActivityIndicator, Image, Text } from "react-native"
import colors from "tailwindcss/colors"
import { MotiView } from "moti"
import { Easing } from "react-native-reanimated"

const logo = require("@/assets/images/logo_128.png")

const anim = {
   from: {
      opacity: 0.5,
      rotate: "0deg",
      translateY: -40,
      scale: 0.5,
   },
   animate: {
      opacity: 1,
      rotate: "360deg",
      translateY: 0,
      scale: 1,
   },
   transition: {
      type: "timing",
      duration: 2500,
      loop: true,
      repeatReverse: true,
      easing: Easing.elastic(3),
   },
   exit: {
      opacity: 0,
      rotate: "0deg",
      translateY: -50,
      scale: 0.5,
   },
   exitTransition: {
      type: "timing",
      duration: 200,
      easing: Easing.elastic(2),
   },
}

const Loading = ({ label, hideLogo }) => {
   return (
      <View className="flex-1 items-center justify-center px-5 pb-32">
         {!hideLogo && (
            <>
               <MotiView {...anim}>
                  <Image
                     source={logo}
                     className=""
                  />
               </MotiView>
               <View className="h-8" />
            </>
         )}
         <ActivityIndicator
            className=""
            size="large"
            color={colors.neutral[500]}
         />
         <Text className="mt-2 text-neutral-500">{label ? label : "Loading"}</Text>
      </View>
   )
}

export default Loading
