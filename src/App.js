import SectionFour from "./udemy/components/section-4/Section-4.component";

// https://sketchrepo.com/free-sketch/shopping-cart-ui-interaction-freebie/
const App = () => {
  // const url = `http://${state.ADDR}:${state.PORT}`;
  // const imageFolder = `${url}/img/codemagazine`;

  let state = {};
  state.port = 3000;
  state.addr = "172.16.150.190";
  state.url = `http://${state.addr}:${state.port}`;
  state.imgFolder = `${state.url}/img/codemagazine/`;

  console.log(Object.values(state));
  // const url = `http://${state.ADDR}:${state.PORT}`;
  // const imageFolder = `${url}/img/codemagazine`;

  // const Card = ({ state }) => {
  //   return (
  //     <div className="card-container">
  //       <div className="job-checkbox-container">
  //         <p className="job-title">Software Developer</p>
  //         <div className="checkbox-container">
  //           <input className="job-checkbox" type="checkbox" />
  //           <label>applied: </label>
  //         </div>
  //       </div>

  //       <p className="job-pay">156K</p>

  //       <p className="job-description">
  //         We are looking for a competent developer to join our team of 16+. Our
  //         agency spealizes in creating digital products for customers, that meet
  //         requirements, and delight customers.
  //       </p>
  //       <div className="btn-container">
  //         <button
  //           className="job-apply-btn"
  //           onClick={() => alert("You've made a great choice!")}
  //         >
  //           apply
  //         </button>
  //       </div>
  //     </div>
  //   );
  // };

  // const Practice = ({ state }) => {
  //   return (
  //     <>
  //       <div className="container">
  //         <header>
  //           <nav>
  //             <a href={state.url}>
  //               <li>home</li>
  //             </a>
  //             <a href={state.url}>
  //               <li>about</li>
  //             </a>
  //             <a href={state.url}>
  //               <li>blog</li>
  //             </a>
  //             <a href={state.url}>
  //               <li>contact</li>
  //             </a>
  //           </nav>
  //         </header>
  //         <div>
  //           <Card state={state} />
  //         </div>
  //       </div>
  //     </>
  //   );
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
  return (
    <>
      {/* <Practice state={state} /> */}
      {/* <Sketch state={state} /> */}
      {/* <Section3Challenge1 state={state} /> */}
      {/* <CodeMagazine state={state} /> */}
      {/* <CSS3Fundamentals state={state} /> */}
      <SectionFour state={state} />
     </>
  )
};

export default App;
