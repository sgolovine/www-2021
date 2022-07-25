import React from "react"
import PunkSVG from "./PunkSVG"
import { usePunk } from "./usePunk"
import Image from "next-image-export-optimizer"

const eyesImage = "/images/eyes.png"
const sunglassesImage = "/images/sunglasses.png"

const Punk = () => {
  const {
    eyeColorLeft,
    eyeColorRight,
    bgColor,
    onBackgroundClick,
    toggleShades,
    showShades,
  } = usePunk()

  return (
    <div className="punk-border-container">
      <div
        onClick={onBackgroundClick}
        className="punk-container"
        style={{ backgroundColor: bgColor }}
      >
        <div className="punk-container-top">
          <button type="button" className="punk-button" onClick={toggleShades}>
            <div>
              {showShades ? (
                <Image src={eyesImage} alt="eyes" height={48} width={48} />
              ) : (
                <Image
                  src={sunglassesImage}
                  alt="shades"
                  height={48}
                  width={48}
                />
              )}
              {/* TODO: Fix Images  */}
            </div>
          </button>
        </div>
        <div className="punk-container-bottom">
          <div className="punk-svg-container">
            <PunkSVG
              showShades={showShades}
              eyeColorLeft={eyeColorLeft}
              eyeColorRight={eyeColorRight}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Punk
