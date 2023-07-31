import React, { useState } from "react";
import "./CardFlip.css"; // Import your CSS file for styling

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const StateInformation = () => {
    return (
      <>
        <h2>{`isFlipped: ${isFlipped}`}</h2>
      </>
    );
  };

  return (
    <>
      <StateInformation />
      <div
        className={`card ${isFlipped ? "flipped" : ""}`}
        onClick={handleCardFlip}
      >
        <div className={"front"}>
          {/* Content for the front side of the card */}
          <h2>Front Side</h2>
          <p>This is the front side of the card.</p>
        </div>
        <div className="back">
          {/* Content for the back side of the card */}
          <h2>Back Side</h2>
          <p>This is the back side of the card.</p>
        </div>
      </div>
    </>
  );
};

export default CardFlip;
