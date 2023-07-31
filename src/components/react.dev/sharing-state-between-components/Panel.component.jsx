import { useState } from "react";

// function Panel({ title, children }) {
//     const [isActive, setIsActive] = useState(false);
//     return (
//       <section className="panel">
//         <h3>{title}</h3>
//         {isActive ? (
//           <p>{children}</p>
//         ) : (
//           <button onClick={() => setIsActive(true)}>
//             Show
//           </button>
//         )}
//       </section>
//     );
//   }

// function Panel({ title, children }) {
//   const [isActive, setIsActive] = useState(false);
//   const IsActiveTrue = () => {
//     return <p>{children}</p>;
//   };
//   const IsActiveFalse = () => {
//     return <button onClick={() => setIsActive(true)}>Show</button>;
//   };
//   const ternary = (isActive ? IsActiveTrue : IsActiveFalse)()
//   return (
//     <section className="panel">
//       <h3>{title}</h3>
//       {ternary}
//     </section>
//   );
// }

function Panel({
  title,
  children,
  isActive,
  onShow,
  style
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p style={style}>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  )};
export default Panel;
