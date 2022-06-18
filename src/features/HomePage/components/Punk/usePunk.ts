import { useEffect, useState } from "react"
import { EyeColor, LookDirection } from "./types"

const PUNK_COLORS = ["#8c5851", "#8972b1", "#6a8494", "#75a475"]

function getRandomIntInclusive(min: number, max: number): number {
  return Math.floor(
    Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.floor(min)
  )
}

function removeItemAtIndex<T>(array: T[], item: T): T[] {
  const index = array.indexOf(item)
  return [...array.slice(0, index), ...array.slice(index + 1)]
}

export const usePunk = () => {
  const [showShades, setShowShades] = useState<boolean>(false)
  const [bgColor, setBgColor] = useState<string>(PUNK_COLORS[0])
  const [lookDirection, setLookDirection] = useState<LookDirection>("right")
  const eyeColorLeft: EyeColor = lookDirection === "left" ? "black" : "white"
  const eyeColorRight: EyeColor = lookDirection === "right" ? "black" : "white"

  useEffect(() => {
    function handleMouseEvent(evt: any) {
      if (!showShades) {
        if (evt.clientX * 2 > window.innerWidth) {
          setLookDirection("right")
        } else {
          setLookDirection("left")
        }
      }
    }
    if (window && typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseEvent)

      return () => window.removeEventListener("mousemove", handleMouseEvent)
    }
  }, [showShades])

  const onBackgroundClick = () => {
    // Remove the current color from the array
    // So it does not come up again when selecting a random color
    const allColorsExceptSelected = removeItemAtIndex(PUNK_COLORS, bgColor)

    // Get a random index
    const randomColorIndex = getRandomIntInclusive(
      0,
      allColorsExceptSelected.length - 1
    )

    // Get the color at the index
    const randomColor = PUNK_COLORS[randomColorIndex]

    // Set the random color
    setBgColor(randomColor)
  }

  const toggleShades = () => setShowShades(prevShades => !prevShades)

  return {
    eyeColorLeft,
    eyeColorRight,
    bgColor,
    showShades,
    onBackgroundClick,
    toggleShades,
  }
}
