import { cardSide } from "./RotatingFlashCard.style";

const BackSideRotation = (isHover) => {
  const BACK_ROTATION_BACK = {
    backgroundColor: "#0093E9",
    backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
  };
  const backRotationHover = {
    transform: "rotateY(-360deg)",
  };

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
          ? { ...cardSide, ...backRotationHover, ...BACK_ROTATION_BACK }
          : { ...cardSide, ...BACK_ROTATION_BACK }
      }
    >
      <span className="furigana" style={{ ...furiganaStyle, display: "none" }}>
        わ た し
      </span>
      <div style={{ fontSize: "120px" }}>私</div>
    </div>
  );
};

export default BackSideRotation;
