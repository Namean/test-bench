import { cardSide } from "./RotatingFlashCard.style";

const FrontSideRotation = () => {
  const ROTATION_HOVER = {
    transform: "rotateY(-89.9deg)",
  };
  const FRONT_ROTATION_BACK = {
    backgroundColor: "#0093E9",
    backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
  };
  return (
    <div
      className="card-side back"
      style={{ ...cardSide, ...ROTATION_HOVER, ...FRONT_ROTATION_BACK }}
    >
      <div style={{ fontSize: "120px" }}>FRONTSIDE: ROTATION</div>
    </div>
  );
};

export default FrontSideRotation;
