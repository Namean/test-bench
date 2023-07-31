import { cardSide } from "./RotatingFlashCard.style";

const BackSide = ({ isHover }) => {
  const furiganaStyle = {
    position: "relative",
    top: "-10",
    left: "90px",
    color: "black",
  };
  const backHover = {
    transform: "rotateY(0deg)",
  };

  const back = {
    backgroundColor: "#0093E9",
    backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
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
      <span className="furigana" style={{ ...furiganaStyle, display: "none" }}>
        わ た し
      </span>
      <div style={{ fontSize: "120px" }}>BACKSIDE</div>
    </div>
  );
};

export default BackSide;
