const FlashCard = () => {
  const flashcardStyle = {
    border: "solid 1px black",
    padding: "20px",
    width: "auto",
    // margin: "10px 10px 10px 10px",
    borderRadius: "8px",
    WebkitBoxShadow: "10px 14px 6px 1px rgba(0,0,0,0.47)",
    MozBoxShadow: "10px 14px 6px 1px rgba(0,0,0,0.47)",
    boxShadow: "10px 14px 6px 1px rgba(0,0,0,0.47)",
  };
  const kanjiStyle = {
    fontSize: "120px",
    position: "relative",
    left: "60px",
  };

  const furiganaStyle = {
    position: "relative",
    top: "-10",
    left: "90px",
  };

  return (
    <>
      <div className="flashcard" style={flashcardStyle}>
        <span className="furigana" style={furiganaStyle}>
          わ た し
        </span>
        <p className="kanji" style={kanjiStyle}>
          私
        </p>
      </div>
    </>
  );
};

export default FlashCard;
