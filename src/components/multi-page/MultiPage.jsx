import { useState, useEffect } from "react";
import "../../styles/multipage-styles.css";
import { Term } from "./Term.component";
const List = ({ data, Child }) => {
  const listItems = data.map((n, index) => {
    return <Child props={n} />;
  });

  return <ul>{listItems}</ul>;
};

const Nav = () => {
  return (
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
  );
};

const Counter = (size) => {
  const [value, setValue] = useState(0);
  const [buffer, setBuffer] = useState([]);
  // const [data, setData] = useState(Object.values(buffer));

  return (
    <>
      <div>Counter: {value}</div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
    </>
  );
};

// FilterTable

const FilterableTable = () => {
  const [termSelected, setTermSelected] = useState(false);
  return (
    <>
      <table id="myTable">
        <tbody>
          <tr className="header">
            <th style={{ width: "60%" }}>Name</th>
            <th style={{ width: "40%" }}>Country</th>
          </tr>

          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Berglunds snabbkop</td>
            <td>Sweden</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Koniglich Essen</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Italy</td>
          </tr>
          <tr>
            <td>North/South</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Paris specialites</td>
            <td>France</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const FilterableTableInput = () => {
  return (
    <>
      <input
        type="text"
        id="myInput"
        onKeyUp={() => myFunction()}
        placeholder="Search for names.."
        title="Type in a name"
      />
    </>
  );
};

function FilterTable() {
  return (
    <>
      <FilterableTableInput />
      <FilterableTable />
    </>
  );
}

const myFunction = () => {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};

const Modal = () => {
  {
    /* */
  }
  return (
    <>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <p>Some text in the Modal..</p>
          <FilterTable />
        </div>
      </div>
    </>
  );
};

const ModalButton = () => {
  {
    /* <!-- Trigger/Open The Modal --> */
  }

  function clickHandler() {
    // alert("Hello World!");
    return ModalController();
  }
  return (
    <button id="myBtn" onClick={() => clickHandler()}>
      Open Modal
    </button>
  );
};

const ModalController = () => {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
};

const PageSection = ({ props, children }) => {
  const { title } = props;
  return (
    <section id="sectionX">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
};

const Page = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    const changeNavLink = () => {
      let index = sections.length;

      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    };

    changeNavLink();
    window.addEventListener("scroll", changeNavLink);

    return () => {
      window.removeEventListener("scroll", changeNavLink);
    };
  }, []);

  const NavBar = () => {
    const navBarData = ["Section 1", "Section 2", "Section 3", "Section 4"];
    let links = navBarData.map((v) => {
      let _href = v.split(" ").join("");
      return (
        <li>
          <a href={`${_href}`}>{v}</a>
        </li>
      );
    });
    // return (
    //   <nav className="navbar">
    //     <ul>
    //       <li>
    //         <a href="#section1">Section 1</a>
    //       </li>
    //       <li>
    //         <a href="#section2">Section 2</a>
    //       </li>
    //       <li>
    //         <a href="#section3">Section 3</a>
    //       </li>
    //       <li>
    //         <a href="#sectionX">Section X</a>
    //       </li>
    //     </ul>
    //   </nav>
    // );

    return (
      <nav className="navbar">
        <ul>{links}</ul>
      </nav>
    );
  };

  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li>
            <a href="#section1">Section 1</a>
          </li>
          <li>
            <a href="#section2">Section 2</a>
          </li>
          <li>
            <a href="#section3">Section 3</a>
          </li>
          <li>
            <a href="#sectionX">Section X</a>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Modal />
        <ModalButton />

        <section id="section1">
          <h2>Section 1</h2>
          <p>Content for Section 1...</p>
        </section>
        <section id="section2">
          <h2>Section 2</h2>
          <p>Content for Section 2...</p>
        </section>
        <section id="section3">
          <h2>Section 3</h2>
          <p>Content for Section 3...</p>
        </section>
        <PageSection
          props={{
            title: "Orange",
          }}
          children={[<p>Delicious Citrus Fruit</p>]}
        />
      </div>
    </div>
  );
};

// function App() {
//   return (
//     <>
//       <Page />
//     </>
//   );
// }

export {
  List,
  Counter,
  FilterableTable,
  FilterableTableInput,
  Modal,
  ModalController,
  PageSection,
  Page,
};
