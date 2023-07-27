import { useState } from "react";

import { CardStyle, cardSide } from "./RotatingFlashCard.style";
import FrontSide from "./FrontSide";
import FrontSideRotation from "./FrontSideRotation";
import BackSide from "./BackSide";
import BackSideRotation from "./BackSideRotaion";

const RotatingFlashCard = () => {
  const [isHover, setIsHover] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

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
          {isHover ? BackSideRotation(isHover) : BackSide(isHover)}
        </div>
      </>
    );
  } else {
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
          {isHover ? BackSideRotation(isHover) : BackSide(isHover)}
        </div>
      </>
    );
  }
};

export default RotatingFlashCard;
