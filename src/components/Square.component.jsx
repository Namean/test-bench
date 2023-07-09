const Square = () => {
  const [isRed, setIsRed] = useState(false);
  useEffect(() => {}, [isRed, setIsRed]); // Re-render when style changes;
  const redBorder = {
    border: "solid 1px red",
    width: "400px",
    height: "400px",
  };
  const blackBorder = {
    border: "solid 1px black",
    width: "200px",
    height: "200px",
  };

  let ternary = isRed ? redBorder : blackBorder;

  const handler = () => {
    console.log(ternary);
    if (isRed) {
      setIsRed(false);
    } else {
      setIsRed(!false);
    }
  };

  return (
    <div style={ternary}>
      <button onClick={() => handler()}>click me</button>
    </div>
  );
};

export default Square;