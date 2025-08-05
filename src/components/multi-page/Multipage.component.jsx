import { useState, useEffect } from "react";
import "./styles/Multipage.style.css";

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
        {/* <Modal /> */}
        {/*<ModalButton /> */}

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

export { List, PageSection, Page };
