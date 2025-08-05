/** @jsx h */

// import { render, h, Fragment } from "https://esm.sh/preact";
// import { useState, useEffect } from "https://esm.sh/preact/hooks";

import { useState, useEffect } from "react";

function List({ data, Child }) {
  const listItems = data.map((n, index) => {
    return <Child props={n} />;
  });

  return <ul>{listItems}</ul>;
}

function Nav() {
  return (
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
  );
}

function Counter(size) {
  const [value, setValue] = useState(0);
  const [buffer, setBuffer] = useState([]);
  // const [data, setData] = useState(Object.values(buffer));

  return (
    <Fragment>
      <div>Counter: {value}</div>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
    </Fragment>
  );
}

// FilterTable

function FilterableTable() {
  const [termSelected, setTermSelected] = useState(false);
  return (
    <Fragment>
      <table id="myTable">
        <tr class="header">
          <th style="width:60%;">Name</th>
          <th style="width:40%;">Country</th>
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
      </table>
    </Fragment>
  );
}

function FilterableTableInput() {
  return (
    <Fragment>
      <input
        type="text"
        id="myInput"
        onkeyup={() => myFunction()}
        placeholder="Search for names.."
        title="Type in a name"
      />
    </Fragment>
  );
}

function FilterTable() {
  return (
    <Fragment>
      // <FilterableTableInput />
      <FilterableTable />
    </Fragment>
  );
}

function myFunction() {
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
}

function Modal() {
  {
    /* */
  }
  return (
    <Fragment>
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <p>Some text in the Modal..</p>
          <FilterTable />
        </div>
      </div>
    </Fragment>
  );
}

function ModalButton() {
  {
    /* <!-- Trigger/Open The Modal --> */
  }

  function clickHandler() {
    // alert("Hello World!");
    ModalController();
  }
  return (
    <button id="myBtn" onClick={() => clickHandler()}>
      Open Modal
    </button>
  );
}

function ModalController() {
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
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function SectionX() {
  return (
    <section id="sectionX">
      <h2>Section X</h2>
      <p>Content for Section X...</p>
    </section>
  );
}

function Page() {
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
        {/* mark0 */}
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
        <SectionX />
      </div>
    </div>
  );
}

function App() {
  return (
    <Fragment>
      <Page />
    </Fragment>
  );
}

render(<App />, document.getElementById("app"));
