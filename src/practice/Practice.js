import { useState } from "react";
import "./styles.practice.css";
// https://sketchrepo.com/free-sketch/shopping-cart-ui-interaction-freebie/

// const cardList = () => {
//   let cardData = [];
//   let list = cardData.map((idx, index) => <Card props={idx} />);
//   return <ul>{list}</ul>;
// };

// const Sketch = ({ state }) => {
//   return (
//     <div className="sketch-container">
//       <div className="sketch-card">
//         <div className="sketch-inner-container">
//           <nav className="sketch-nav">
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 marginRight: "10px",
//               }}
//             >
//               <img src="#" alt="Shhhhop company logo" />
//               <p className="logo-text">Shhhhop</p>
//             </div>
//           </nav>
//           <div>
//             <p className="product-description">
//               Samsung NX300 20.3MP 18-55mm Lens
//             </p>
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "baseline",
//               }}
//             >
//               <p className="product-price">$750</p>
//               <p
//                 style={{
//                   fontSize: "135%",
//                   color: "#a3a3a3",
//                   marginRight: "5px",
//                 }}
//               >
//                 Qty
//               </p>
//               <p
//                 style={{
//                   border: "solid 2px #a3a3a3",
//                   borderRadius: "3px",
//                   fontSize: "120%",
//                   padding: "15px",
//                 }}
//               >
//                 1
//               </p>
//               <p
//                 style={{
//                   fontSize: "40px",
//                   backgroundColor: "#d7d7d7",
//                   border: "solid 1px none",
//                   borderRadius: "100%",
//                   color: "#fff",
//                 }}
//               >
//                 &#65291;
//               </p>
//               <p
//                 style={{
//                   fontSize: "48px",
//                   backgroundColor: "#d7d7d7",
//                   border: "solid 1px none",
//                   borderRadius: "100%",
//                   color: "#fff",
//                 }}
//               >
//                 &minus;
//               </p>
//             </div>
//             <hr
//               style={{
//                 color: "black",
//                 width: "200px",
//                 height: "3px",
//                 backgroundColor: "black",
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// prettier-ignore
//   let sections = ['Node', 'TypeScript', 'JavaScript', 'Vim', 'Lua'];
//   const sectionsList = () => {
//     const listItems = sections.map((product) => (
//       <li
//         key={product.id}
//         style={{
//           color: product.isFruit ? "magenta" : "darkgreen",
//         }}
//       >
//         {product}
//       </li>
//     ));

//     return <ul>{listItems}</ul>;
//   };
//   return (
//     <>
//       <h1>Hello World!</h1>
//       <nav className="sections-nav">{sectionsList}</nav>
//       <Practice state={state} />
//       {/* <Sketch state={state} /> */}

//       {/* <CodeMagazine state={state} /> */}

//       {/* <SectionFour state={state} /> */}
//     </>
//   );
// };

const JobApplication = () => {
  return (
    <>
      <h2>Job Application</h2>
      <ul>
        <li>{"props.title"}</li>
      </ul>
    </>
  );
};

const Card = ({ state, id }) => {
  const [clicked, setClicked] = useState(false); // raiseState(Practice)

  const checkboxClickHandler = () => {
    if (clicked) {
      setClicked(false);
    }
  };

  const applyButtonHandler = () => {
    let JobApplicationProps = {
      title: "prop: Software Developer",
    };
    state.setCurrentApplcation(<JobApplication props={JobApplicationProps} />);
  };

  return (
    <div
      style={{
        width: "800px",
        border: clicked ? "solid 5px green" : "solid 5px white",
      }}
      className="card-container"
    >
      <h2>{`clicked: ${clicked}`}</h2>
      <h2>{`id: ${id}`}</h2>
      <div className="job-checkbox-container">
        <p className="job-title">Software Developer</p>
        <div className="checkbox-container">
          <input
            onClick={() => {
              setClicked(true);
              checkboxClickHandler();
            }}
            className="job-checkbox"
            type="checkbox"
          />
          <label>applied: </label>
        </div>
      </div>

      <p className="job-pay">156K</p>

      <p className="job-description">
        We are looking for a competent developer to join our team of 16+. Our
        agency spealizes in creating digital products for customers, that meet
        requirements, and delight customers.
      </p>
      <div className="btn-container">
        <button className="job-apply-btn" onClick={() => applyButtonHandler()}>
          apply
        </button>
      </div>
    </div>
  );
};
const Practice = () => {
  const [clicked, setClicked] = useState(false);
  const [currentApplication, setCurrentApplcation] = useState(JobApplication);

  const state = {};
  state.port = 3000;
  state.addr = "localhost";
  state.url = `http://${state.addr}:${state.port}`; // http://172.16.150.189:3000
  state.imgFolder = `${state.url}/img/codemagazine/`; // http://172.16.150.189:3000/img/codemagazine/

  state.clicked = clicked;
  state.setClicked = setClicked;

  // What if I namespaced the state such as
  // state.JobApplication.currentApplication
  // state.JobApplication.setcurrentApplication
  state.currentApplication = currentApplication;
  state.setCurrentApplcation = setCurrentApplcation;

  // console.log(Object.values(state));
  console.table(state);
  // const url = `http://${state.ADDR}:${state.PORT}`;
  // const imageFolder = `${url}/img/codemagazine`;

  return (
    <div className="container-container">
      <div className="container">
        <header>
          <nav className="job-nav">
            <a href={state.url}>
              <li>home</li>
            </a>
            <a href={state.url}>
              <li>about</li>
            </a>
            <a href={state.url}>
              <li>blog</li>
            </a>
            <a href={state.url}>
              <li>contact</li>
            </a>
          </nav>
        </header>
        <div>
          <Card state={state} id={0} />
          <Card state={state} id={1} />
          <Card state={state} id={2} />
          {/* <Card state={state} />
          <Card state={state} /> */}
        </div>
      </div>
      <div
        style={{
          width: "50%",
          height: "500px",
          display: "inline-block",
          border: "solid 16px black",
        }}
      >
        {currentApplication}
      </div>
    </div>
  );
};

export default Practice;
