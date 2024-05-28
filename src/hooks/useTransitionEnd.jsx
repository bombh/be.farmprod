/**
 * useTransitionEnd.jsx
 */
import { useEffect, useState } from "react"
import { useNavigation } from "expo-router"

const useTransitionEnd = () => {
   // Hooks
   const [isEnd, setIsEnd] = useState(false)
   const navigation = useNavigation()

   useEffect(() => {
      const unsubscribe = navigation.addListener("transitionEnd", (e) => {
         setIsEnd(true)
         console.log("Transition end")
      })

      return unsubscribe
   }, [navigation])

   return { isEnd }
}

export default useTransitionEnd
