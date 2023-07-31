import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(1);
  const [calculation, setCalculation] = useState(0);
  const url2 = "http://172.16.150.190:3001/employees";
  // const [data] = useFetch(url2);
  const data = employees;
  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  const DecrementButton = () => {
    return (
      <button
        onClick={() =>
          setCount((c) => {
            if (c === 1) {
              return data.length;
            } else {
              return c - 1;
            }
          })
        }
      >
        DECREMENT
      </button>
    );
  };

  const IncrementButton = () => {
    return (
      <button
        id="inc"
        onClick={() =>
          setCount((c) => {
            if (c === data.length) {
              return 1;
            } else {
              return c + 1;
            }
          })
        }
      >
        INCREMENT
      </button>
    );
  };

  return (
    <>
      <p>Count: {count}</p>
      <p>Calculation: {calculation}</p>

      <DecrementButton />
      <IncrementButton />

      <div>
        {data &&
          data.map((idx, index) => {
            return (
              <>
                <li
                  key={idx.EmployeeId}
                  style={idx.EmployeeId <= count ? {} : { display: "none" }}
                >
                  {idx.FirstName}
                </li>
              </>
            );
          })}
      </div>
    </>
  );
}

export default Counter;
