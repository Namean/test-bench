const Term = ({ props, children }) => {
  const { name, definition } = props;
  return (
    <div className="term-container">
      <p
        style={{
          fontSize: "2rem",
        }}
      >
        {name}
      </p>
      <p>{definition}</p>
    </div>
  );
};

export { Term };
