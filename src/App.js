// import SectionFour from "./udemy/components/section-4/Section-4.component";
import "./style.css";
// import TestBench from "./TestBench";
import { useEffect, useState } from "react";
import Mongo from "./mongo/Mongo.component";
import "./styles/ContactForm.style.css";

// function query() {
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", "http://localhost:3001/mongo", true);
//   xhr.setRequestHeader("Content-Type", "application/json");

//   xhr.send(null);
//   return new Promise(xhr);
// }

const formTypes = [
  "button",
  "checkbox",
  "color",
  "date",
  "datetime-local",
  "email",
  "file",
  "hidden",
  "image",
  "month",
  "number",
  "password",
  "radio",
  "range",
  "reset",
  "search",
  "submit",
  "tel",
  "text",
  "time",
  "url",
  "week",
];

const Label = ({ _for, id, name, type }) => {};

let params = ["_id", "name", "dob", "loves", "weight", "gender", "vampires"];

// const unicorn = {
//   _id: "64f4151489d97f5bf911b71c",
//   name: "Horny",
//   dob: "1992-03-13T12:47:00.000Z",
//   loves: ["carrot", "papaya"],
//   weight: 600,
//   gender: "m",
//   vampires: 63,
// };

const ContactForm = () => {
  // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_contact_form
  return (
    <div class="container">
      <form action="/action_page.php">
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />

        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <label for="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
          style={{ height: "200px" }}
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

// const MyForm = () => {
//   const [_id, set_id] = useState("");
//   const [name, setName] = useState("");
//   const [dob, setDob] = useState("");
//   const [loves, setLoves] = useState("");
//   const [weight, setWeight] = useState("");
//   const [gender, setGender] = useState("");
//   const [vampires, setVampires] = useState("");

//   return (
//     <div
//       style={{
//         marginLeft: "40px",
//         diplay: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <h2>Unicorn Finder</h2>
//       <form>
//         <section>
//           <label for="_id">_id: </label>
//           <input
//             className="unicorn"
//             type=""
//             id="_id"
//             name="_id"
//             value={unicorn._id}
//           />
//         </section>

//         <section>
//           <label for="name">name: </label>
//           <input
//             className="unicorn"
//             type=""
//             id="name"
//             name="name"
//             value={unicorn.name}
//           />
//         </section>

//         <section>
//           <label for="dob">dob: </label>
//           <input
//             onChange={(e) => setDob(e.target.value)}
//             className="unicorn"
//             type="date"
//             id="dob"
//             name="dob"
//             value={dob}
//           />
//         </section>

//         <section>
//           <label for="loves">loves: </label>
//           <input
//             onChange={(e) => setDob(e.target.value)}
//             className="unicorn"
//             type="checkbox"
//             id="loves"
//             name="loves"
//             value={loves}
//           />
//         </section>

//         <section>
//           <label for="weight">weight: </label>
//           <input
//             onChange={(e) => {
//               // const value = e.target.value;
//             }}
//             className="unicorn"
//             type="number"
//             id="weight"
//             name="weight"
//             value={unicorn.weight}
//           />
//         </section>
//       </form>
//     </div>
//   );
// };

function dataPOST() {
  function toArray(htmlCollection) {
    let buffer = [];

    for (let i = 0; i < htmlCollection.length; i++) {
      buffer.push(htmlCollection[i]);
    }

    return buffer;
  }
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "http://192.168.1.152:3001/mongoQuery", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  let sendData; // collect data from React form
  // sendData = () => {
  //   let obj = {};
  //   let inputs = toArray(document.getElementsByClassName("unicorn"));
  //   inputs.map((x) => (obj[`${x.name}`] = x.value));
  // };
  // xhr.send(
  //   JSON.stringify({
  //     gender: "m",
  //     weight: { $lt: 600 },
  //   })
  // );

  let query = { gender: "m", weight: { $gt: 600 } };
  let json = JSON.stringify(query);
  xhr.send(json);

  return xhr;
}

function dataFetchPromise() {
  new Promise((resolve) => {
    dataFetch((err, data) => {
      console.log(data);
    });
  });
}

function runFetch() {
  dataFetch().then((data) => console.log(data["response"]));
}

// async function dataFetch() {
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", "http://localhost:3001/mongo", true);
//   xhr.send(null);

//   return await xhr;
// }

// function rig() {
//   let R = dataFetch();

//   setTimeout(() => {
//     console.log(R.response);
//   }, 500);
// }

function dataFetch() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "http://192.168.1.152:3001/mongo", true);
  xhr.send(null);

  return xhr;
}

function getData() {
  let p = dataFetch();
  new Promise((resolve) => {
    resolve(p);
  });
  // p.then((data) => console.log(data.response));
  // console.log(p.response);
}

const unicorns1 = [
  {
    name: "Horny",
    loves: ["carrot", "papaya"],
    weight: 600,
    gender: "m",
    vampires: 63,
  },
  {
    name: "Aurora",
    loves: ["carrot", "grape"],
    weight: 450,
    gender: "f",
    vampires: 43,
  },
  {
    name: "Unicrom",
    loves: ["energon", "redbull"],
    weight: 984,
    gender: "m",
    vampires: 182,
  },
];

const unicorns2 = [
  {
    name: "Ayna",
    loves: ["strawberry", "lemon"],
    weight: 733,
    gender: "f",
    vampires: 40,
  },
  {
    name: "Leia",
    loves: ["apple", "watermelon"],
    weight: 601,
    gender: "f",
    vampires: 33,
  },
];

const MyComponent = ({ _color }) => {
  return (
    <div
      style={{
        border: `solid 5px ${_color}`,
        width: "200px",
        height: "200px",
      }}
    >
      MyComponent
    </div>
  );
};

const App = () => {
  // return <TestBench />;
  const [color, setColor] = useState("orange");
  const [colorBuffer, setColorBuffer] = useState("");
  const [data, setData] = useState(unicorns2);
  const [index, setIndex] = useState(0);

  function rig() {
    // let R = dataFetch();
    let R = dataPOST();
    // console.log(R);

    setTimeout(() => {
      console.log(`rig() > R = dataPost() -> R.response`, R.response);
      setData(JSON.parse(R.response));
    }, 1500);
  }

  function increment() {
    const limit = unicorns2.length - 1;
    if (index === limit) {
      // alert(`limit of index: ${limit} reached!!`);
      return;
    }
    setIndex(index + 1);
  }

  function decrement() {
    const limit = 0;
    if (index === limit) {
      // alert(`limit of index: ${limit} reached!!`);
      return;
    }
    setIndex(index - 1);
  }

  return (
    <>
      {/* <h2
        style={{
          fontSize: "330%",
          textAlign: "center",
        }}
      >
        {`${index + 1} / ${unicorns2.length}`}
      </h2> */}
      {/* <Mongo data={[unicorns2[index]]} /> */}
      <Mongo data={data} />

      {/* <MyComponent _color={color} /> */}

      {/* <button onClick={() => dataPOST()}>POST</button> */}
      <button onClick={() => rig()}>FETCH</button>
      {/* <button onClick={() => setColor(colorBuffer)}>click me</button>
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button> */}
      {/* <input
        onChange={(e) => setColorBuffer(e.target.value)}
        type={"text"}
        id="color"
        name="color"
      />
      <MyForm />
      <ContactForm /> */}
    </>
  );
};

export default App;
