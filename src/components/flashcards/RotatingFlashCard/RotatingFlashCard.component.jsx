import { useState } from "react";

import { CardStyle, cardSide } from "./RotatingFlashCard.style";
import FrontSide from "./FrontSide";
import FrontSideRotation from "./FrontSideRotation";
import BackSide from "./BackSide";
import BackSideRotation from "./BackSideRotaion";

const RotatingFlashCard = () => {
  const [isHover, setIsHover] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const StateInfo = () => {
    return (
      <>
        <h2>{`isHover:             ${isHover}`}</h2>
        <h2>{`isRotated:           ${isRotated}`}</h2>
        <h2>{`isAnimationComplete: ${isAnimationComplete}`}</h2>
      </>
    );
  };

  // prettier-ignore
  const handleMouseEnter = () => { setIsHover(true); };
  // prettier-ignore
  const handleMouseLeave = () => { setIsHover(false); };

  if (isHover === false && isRotated === false) {
    return (
      <>
        <div
          className="card"
          style={{ ...CardStyle }}
          onMouseEnter={() => {
            handleMouseEnter();
            setTimeout(() => {
              setIsRotated(true);
            }, 700);
          }}
          onMouseLeave={() => {
            handleMouseLeave();
            // setTimeout(() => {
            //   setIsRotated(false);
            // }, 700);
          }}
        >
          <StateInfo />
          {isHover ? FrontSideRotation() : FrontSide()}
        </div>
      </>
    );
  } else if (isHover === true && isRotated === false) {
    return (
      <>
        <div
          className="card"
          style={{ ...CardStyle, marginBottom: "40px" }}
          onMouseEnter={() => {
            handleMouseEnter();
            setTimeout(() => {
              setIsRotated(true);
            }, 700);
          }}
          onMouseLeave={() => {
            handleMouseLeave();
            setTimeout(() => {
              setIsRotated(false);
            }, 700);
          }}
        >
          <StateInfo />
          {isHover ? FrontSideRotation() : FrontSide()}
        </div>
      </>
    );
  } else if (isHover === true && isRotated === true) {
    return (
      <>
        <div
          className="card"
          style={{ ...CardStyle, marginBottom: "40px" }}
          onMouseEnter={() => {
            handleMouseEnter();
            setIsRotated(true);
          }}
          onMouseLeave={() => {
            handleMouseLeave();
            setIsRotated(false);
          }}
        >
          <StateInfo />
          {isHover === true && isRotated === true
            ? BackSideRotation(isHover)
            : BackSide(isHover)}
        </div>
      </>
    );
  } else if (isHover === false && isRotated === false) {
    return (
      <>
        <div
          className="card"
          style={{ ...CardStyle }}
          onMouseEnter={() => {
            handleMouseEnter();
            setTimeout(() => {
              setIsRotated(true);
            }, 700);
          }}
          onMouseLeave={() => {
            handleMouseLeave();
            setTimeout(() => {
              setIsRotated(false);
            }, 700);
          }}
        >
          {<h2>FALSE | FALSE</h2>}
          <StateInfo />
          {isHover === false && isRotated === false
            ? BackSideRotation(isHover)
            : FrontSideRotation(isHover)}
        </div>
      </>
    );
  }
};

export default RotatingFlashCard;
