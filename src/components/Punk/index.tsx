import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import PunkSVG from "./PunkSVG"
import { usePunk } from "./usePunk"

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
                <StaticImage
                  src="./assets/eyes.png"
                  alt="eyes"
                  placeholder="none"
                  height={48}
                  width={48}
                />
              ) : (
                <StaticImage
                  src="./assets/sunglasses.png"
                  alt="shades"
                  placeholder="none"
                  height={48}
                  width={48}
                />
              )}
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
