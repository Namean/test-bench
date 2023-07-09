const Counter = () => {
  const [count, setCount] = useState(0);

  let states = ["solid", "liquid", "gas", "plasma"];
  const [matterState, setMatterState] = useState(states[0]);
  useEffect(() => {
    console.log(`Count changed to ${count}`);
  }, [count]);

  let matter = {
    idx: count,
    incrementIdx() {
      let limit = 2;
      if (this.idx < limit) {
        // console.log('Within range, you may proceed!');
        // console.log('incrementing idx');
        this.idx += 1;
      } else if (this.idx === limit) {
        this.idx = 0;
      }
    },
    getState() {
      return states[this.idx];
    },
    nextState() {
      console.log(this.getState());
      this.incrementIdx();
    },
  };

  return (
    <div>
      The count is: {count}.
      <h2>The current state of matter is {matter.getState()}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
