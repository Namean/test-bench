import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      // .then((res) => res.json())
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

// const DataList = () => {
//   let data = useFetch("http://localhost:3001/mongo");
//   const listItems = data.map((product) => (
//     <li
//       key={product._id}
//       // style={{
//       //   color: product.isFruit ? "magenta" : "darkgreen",
//       // }}
//     >
//       {product.name}
//     </li>
//   ));

//   return <ul>{listItems}</ul>;
// };

const Mongo = ({ data }) => {
  //   const [data, setData] = useState([]);
  // const uri = "http://localhost:3001/mongo";
  //   const [_data] = useFetch(uri);
  //   let data = _data === undefined ? [] : _data;

  //   setData(useFetch(uri));
  //   console.log(data);

  function getAge(dob) {
    let currentYear = new Date().getFullYear();
    let birthYear = new Date(dob).getFullYear();

    let result = currentYear - birthYear;

    return result;
  }

  return (
    <div>
      <h1>Hello from Mongo.component.jsx!</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {data &&
          data.map((item) => {
            return (
              <>
                <div
                  style={{
                    marginLeft: "40px",
                  }}
                >
                  <h3 key={item._id}>{item.name}</h3>
                  <ul
                    style={{
                      listStyle: "none",
                    }}
                  >
                    <li>Birthdate: {new Date(item.dob).toDateString()}</li>
                    <li>Age: {getAge(new Date(item.dob))}</li>
                    <li
                    //   style={{
                    //     color: item.gender === "f" ? "#FF69B4" : "blue",

                    //     backgroundColor: "#000",
                    //     width: "20px",
                    //     border: "solid 2px black",
                    //     borderRadius: "50%",
                    //   }}
                    >
                      Gender: {item.gender.toUpperCase()}
                    </li>
                    <li>Weight: {item.weight} lbs</li>
                    <li>Vampires Slain: {item.vampires}</li>
                    <li>Loves: {item.loves.join(" ")}</li>
                  </ul>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Mongo;
