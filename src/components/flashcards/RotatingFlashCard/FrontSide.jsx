import { cardSide } from "./RotatingFlashCard.style";

const FrontSide = () => {
  const front = {
    backgroundColor: "#0093E9",
    backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
  };

  return (
    <div className="card-side back" style={{ ...cardSide, ...front }}>
      <div style={{ fontSize: "120px" }}>FRONTSIDE</div>
    </div>
  );
};

export default FrontSide;
