import "./styles/App.css";
import "./styles/FormStyle.css";
import { useState } from "react";
import "./styles/Employees.css";
import RotatingFlashCard from "./components/flashcards/RotatingFlashCard/RotatingFlashCard.component";

const FlashCardRotating = () => {
  const [isHover, setIsHover] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const CardStyle = {
    perspective: "150rem",
    position: "relative",
    height: "40rem",
    maxWidth: "400px",
    margin: "2rem",
    boxShadow: "none",
    background: "none",
  };

  const cardSide = {
    // height: "35rem",
    borderRadius: "15px",
    transition: "all 0.8s ease",
    backfaceVisibility: "hidden",
    // position: "absolute",
    // top: "0",
    // left: "0",
    width: "80%,",
    padding: "2rem,",
    // color: "white",
  };

  const handleMouseEnter = () => {
    console.log("mouse entered");
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    console.log("mouse leaving");
    setIsHover(false);
  };

  // [:: FRONT ::]
  const frontHover = {
    transform: "rotateY(0.0deg)",
  };

  const rotationHover = {
    transform: "rotateY(-89.9deg)",
  };

  const front = {
    backgroundColor: "#0093E9",
    backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
  };

  const FrontSide = () => {
    const _static = { ...cardSide, ...front };
    const animated = { ...cardSide, ...front, ...frontHover };

    // const furiganaStyle = {
    //   position: "relative",
    //   top: "-10",
    //   left: "90px",
    //   color: "black",
    // };

    return (
      <div className="card-side back" style={isHover ? _static : animated}>
        <span className="furigana" style={{ display: "none" }}>
          わ た し
        </span>
        <div style={{ fontSize: "120px" }}>私</div>
        <p
          style={{
            display: "inline-block",
            marginLeft: "5px",
            // borderTop: "solid 1px black",
            // borderBottom: "double 1px black",
            // borderLeft: "soldi 1px black",
            borderBottomLeftRadius: "18px 8px",
            // borderTopLeftRadius: "5px",
            // borderRight: "solid 1px black",
            border: "double 5px black",
            paddingRight: "2px",
            paddingLeft: "5px",
            paddingTop: "2px",
            // backgroundColor: "#0093E9",
            // backgroundImage:
            //   "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
            // borderInlineEnd: "solid; writing-mode: horizontal-tb",
          }}
        >
          FRONT
        </p>
      </div>
    );
  };

  const rotationback = {
    backgroundColor: "#0093E9",
    backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
  };

  const FrontSideRotation = () => {
    // const furiganaStyle = {
    //   position: "relative",
    //   top: "-10",
    //   left: "90px",
    //   color: "black",
    // };
    return (
      <div
        className="card-side back"
        style={
          isHover
            ? { ...cardSide, ...rotationHover, ...rotationback }
            : { ...cardSide, ...rotationback }
        }
      >
        <span className="furigana" style={{ display: "none" }}>
          わ た し
        </span>
        <div style={{ fontSize: "120px" }}>私</div>
        <p
          style={{
            display: "inline-block",
            marginLeft: "5px",
            // borderTop: "solid 1px black",
            // borderBottom: "double 1px black",
            // borderLeft: "soldi 1px black",
            borderBottomLeftRadius: "18px 8px",
            // borderTopLeftRadius: "5px",
            // borderRight: "solid 1px black",
            border: "double 5px black",
            paddingRight: "2px",
            paddingLeft: "5px",
            paddingTop: "2px",
            // backgroundColor: "#0093E9",
            // backgroundImage:
            //   "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
            // borderInlineEnd: "solid; writing-mode: horizontal-tb",
          }}
        >
          FRONT
        </p>
      </div>
    );
  };

  // _____________
  // |    BACK    |
  // -------------

  const backRotationHover = {
    transform: "rotateY(-360deg)",
  };

  const BackSideRotation = () => {
    const furiganaStyle = {
      position: "relative",
      top: "-10",
      left: "90px",
      color: "black",
    };
    return (
      <div
        className="card-side back"
        style={
          isHover
            ? { ...cardSide, ...backRotationHover, ...rotationback }
            : { ...cardSide, ...rotationback }
        }
      >
        <span className="furigana" style={furiganaStyle}>
          わ た し
        </span>
        <div style={{ fontSize: "120px" }}>私</div>
        <p
          style={{
            display: "inline-block",
            marginLeft: "5px",
            // borderTop: "solid 1px black",
            // borderBottom: "double 1px black",
            // borderLeft: "soldi 1px black",
            borderBottomLeftRadius: "18px 8px",
            // borderTopLeftRadius: "5px",
            // borderRight: "solid 1px black",
            border: "double 5px black",
            paddingRight: "2px",
            paddingLeft: "5px",
            paddingTop: "2px",
            // backgroundColor: "#0093E9",
            // backgroundImage:
            //   "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
            // borderInlineEnd: "solid; writing-mode: horizontal-tb",
          }}
        >
          BACK
        </p>
      </div>
    );
  };

  const backHover = {
    transform: "rotateY(0deg)",
  };

  const back = {
    backgroundColor: "#0093E9",
    backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
  };

  const BackSide = () => {
    const furiganaStyle = {
      position: "relative",
      top: "-10",
      left: "90px",
      color: "black",
    };
    return (
      <div
        className="card-side back"
        style={
          isHover
            ? { ...cardSide, ...backHover, ...back }
            : { ...cardSide, ...back }
        }
      >
        <span className="furigana" style={furiganaStyle}>
          わ た し
        </span>
        <div style={{ fontSize: "120px" }}>私</div>
        <p
          style={{
            display: "inline-block",
            marginLeft: "5px",
            // borderTop: "solid 1px black",
            // borderBottom: "double 1px black",
            // borderLeft: "soldi 1px black",
            borderBottomLeftRadius: "18px 8px",
            // borderTopLeftRadius: "5px",
            // borderRight: "solid 1px black",
            border: "double 5px black",
            paddingRight: "2px",
            paddingLeft: "5px",
            paddingTop: "2px",
            // backgroundColor: "#0093E9",
            // backgroundImage:
            //   "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
            // borderInlineEnd: "solid; writing-mode: horizontal-tb",
          }}
        >
          BACK
        </p>
      </div>
    );
  };

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
          <h2 style={{ marginBottom: "40px" }}>{`isHover: ${isHover
            .toString()
            .toUpperCase()}`}</h2>
          <h2 style={{ marginBottom: "40px" }}>{`isRotated: ${isRotated
            .toString()
            .toUpperCase()}`}</h2>
          {isHover ? FrontSideRotation() : FrontSide()}
        </div>
      </>
    );
  } else if (isHover === true && isRotated === false) {
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
          <h2 style={{ marginBottom: "40px" }}>{`isHover: ${isHover
            .toString()
            .toUpperCase()}`}</h2>
          <h2 style={{ marginBottom: "40px" }}>{`isRotated: ${isRotated
            .toString()
            .toUpperCase()}`}</h2>
          {isHover ? FrontSideRotation() : FrontSide()}
        </div>
      </>
    );
  } else if (isHover === true && isRotated === true) {
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
          <h2 style={{ marginBottom: "40px" }}>{`isHover: ${isHover
            .toString()
            .toUpperCase()}`}</h2>
          <h2 style={{ marginBottom: "40px" }}>{`isRotated: ${isRotated
            .toString()
            .toUpperCase()}`}</h2>
          {isHover ? BackSideRotation() : BackSide()}
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
          <h2 style={{ marginBottom: "40px" }}>{`isHover: ${isHover
            .toString()
            .toUpperCase()}`}</h2>
          <h2 style={{ marginBottom: "40px" }}>{`isRotated: ${isRotated
            .toString()
            .toUpperCase()}`}</h2>
          {isHover ? BackSideRotation() : BackSide()}
        </div>
      </>
    );
  }
};

const App = () => {
  return (
    <>
      <h2>Monolithic</h2>
      <FlashCardRotating />
      <h2>Flash Card</h2>
      <RotatingFlashCard />
    </>
  );
};

export default App;
