import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import { courseData } from "./course-data";

import { useState, useEffect } from "react";
import "./Courses.css";
import Get from "../../../components/fetch/Get.component";
import MyGet from "../../../components/fetch/MyGet.component";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
const MicroMarkComponent = ({ output }) => {
  return (
    <div>
      <h1>MicroMark</h1>
      <div>
        <MyGet url={"http://localhost:8081/json/"} />
      </div>
    </div>
  );
};

const CoursePage = () => {};

const Course = ({ state, localState, idx }) => {
  return <p className="course-title">{idx.title}</p>;
};

const CourseList = ({ state }) => {
  const [count, setCount] = useState(0);

  const localState = {
    count: count,
    setCount: setCount,
  };

  let courseList = courseData.map((idx, index) => (
    <Course localState={localState} idx={idx} />
  ));
  return <div className="course-container">{courseList}</div>;
};

// function addCourse() {
//   if (youtubeCourse) addYouTubeCourse();
// }

function NestingExample() {
  return (
    <Router>
      <div>
        <nav className="subnav">
          <li className="subnav-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="subnav-list-item">
            <Link to="/topics">Topics</Link>
          </li>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Topics() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  const LinkStyle = {
    textDecoration: "none",
    color: "red",
    listStyleType: "none",
    border: "solid 1px black",
  };

  const arr = [1, 2, 3, 4];
  let data_list = arr.map((idx, index) => (
    <li>
      <Link style={LinkStyle} to={`${url}/section-${idx}`}>
        Section {idx}
      </Link>
    </li>
  ));

  return (
    <div>
      {/* <ul className="topics-list">
        <li>
          <Link to={`${url}/section-1`}>Section 1</Link>
        </li>
        <li>
          <Link to={`${url}/section-2`}>Section 2</Link>
        </li>
        <li>
          <Link to={`${url}/section-3`}>Section 3</Link>
        </li>
        <li>
          <Link to={`${url}/section-4`}>Section 4</Link>
        </li>
      </ul> */}

      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          listStyleType: "none",
        }}
        className="topics-list"
      >
        {data_list}
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

const Section = ({ id }) => {
  return (
    <div>
      <h1>Section {id}</h1>
      <SectionContent id={id} />
    </div>
  );
};

const paragraph_style = {
  margin: "20px",
};
const paragraph_style_big = {
  fontSize: "150%",
  color: "red",
  marginBottom: "20px",
};

const imageStyle = {
  red_border_square: {
    border: "solid 2px red",
  },
  blue_border_round: {
    border: "solid 2px blue",
    borderRadius: "50%",
  },
};

let contentData = [
  {
    section: 1,
    content_list: [
      {
        element: "paragraph",
        text: "This is a generated paragraph element for section 1",
        style: paragraph_style,
      },
      {
        element: "paragraph",
        text: "This is the second paragraph for section 1",
        style: paragraph_style,
      },
      {
        element: "image",
        src: "https://picsum.photos/id/11/150",
        alt: "random",
        style: imageStyle.blue_border_round,
      },
    ],
  },
  {
    section: 2,
    content_list: [
      {
        element: "paragraph",
        text: "This is a generated paragraph element for section 2",
      },
    ],
  },
  {
    section: 3,
    content_list: [
      {
        element: "paragraph",
        text: "This is a generated paragraph element for section 3",
      },
    ],
  },
  {
    section: 4,
    content_list: [
      {
        element: "paragraph",
        text: "This is a generated paragraph element for section 4",
      },
    ],
  },
];

// let SectionData = [
//   {
//     section: 1,
//     content: {
//       contentData,
//     },
//   },
//   {
//     section: 2,
//     content: {
//       contentData,
//     },
//   },
//   {
//     section: 3,
//     content: {
//       contentData,
//     },
//   },
//   {
//     section: 4,
//     content: {
//       contentData,
//     },
//   },
// ];

const SectionContent = ({ id }) => {
  const key = id;
  // let section = SectionData.filter((idx) => idx.section === key)[0];
  // let content = section.content.contentData[0];
  let content = contentData.filter((idx) => idx.section === key)[0]
    .content_list[0];

  // let data = [
  //   {
  //     element: "paragraph",
  //     text: "This is a generated paragraph element for section 1",
  //     style: paragraph_style,
  //   },
  //   {
  //     element: "paragraph",
  //     text: "This is the second paragraph for section 1",
  //     style: big_paragraph_style,
  //   },
  //   {
  //     element: "image",
  //     src: "https://picsum.photos/id/11/150",
  //     alt: "random",
  //     style: imageStyle.blue_border_round,
  //   },
  // ];

  const Image = ({ src, alt, style }) => {
    return <img src={src} alt={alt} style={style} />;
  };

  const DataList = ({ data, id }) => {
    let _data = data.filter((idx) => idx.section === id)[0].content_list;
    console.log(_data);
    let list = [];
    for (let i = 0; i < _data.length; i++) {
      let idx = _data[i];

      if (idx.element === "paragraph")
        list.push(<Paragraph content={idx.text} style={idx.style} />);
      if (idx.element === "image")
        list.push(<Image src={idx.src} alt={idx.alt} style={idx.style} />);
    }
    // let buffer = [];
    // buffer.push(<Paragraph content={"Here is some text buffer arr ref"} />);
    return <ul>{list}</ul>;

    // return -99;
  };

  const ContentList = () => {
    let list = [];
  };

  return (
    <div className="section-content">
      <p>Section-{id} Welcome and First Steps </p>
      {/* <Paragraph content={"Here is some content"} /> */}
      {/* <Paragraph content={"More content to be had here"} /> */}
      {/* <Paragraph content={text} /> */}
      <DataList data={contentData} id={id} />
    </div>
  );
};

const Paragraph = ({ content, style }) => {
  return <p style={style}>{content}</p>;
};

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  if (topicId === "section-1") return <Section id={1} />;
  if (topicId === "section-2") return <Section id={2} />;
  if (topicId === "section-3") return <Section id={3} />;
  if (topicId === "section-4") return <Section id={4} />;
  if (topicId === "courses") return <CourseList />;
}

export { CourseList, NestingExample };
