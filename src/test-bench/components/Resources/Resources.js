// @starrwulfe
// bitspora
// bytespora
// hashspora
// nullspora
// Digital hikikomori dispora
// https://www.programonaut.com/meta-tags-in-html-create-powerful-previews-of-your-content/
import React from "react";

const SubTopic = ({ props }) => {
  return (
    <div className="subtopic">
      <p
        style={{
          // color: "red",
          marginRight: "20px",
          border: "solid 1px black",
          padding: "9px",
          paddingRight: "3px",
          paddingLeft: "3px",
          backgroundColor: "dodgerblue",
          color: "#fff",
          borderRadius: "25px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        {props}
      </p>
    </div>
  );
};
let subtopics = ["grammar", "furigana", "particles", "radicals"];
let subtopicList = subtopics.map((idx) => <SubTopic props={idx} />);

const Topic = ({ props }) => {
  return (
    <div
      style={{
        display: "block",
        textAlign: "center",
        fontSize: "130%",
        fontWeight: "100",
      }}
    >
      <h3>{props.topic}</h3>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {subtopicList}
      </ul>
    </div>
  );
};

const Resource = ({ props }) => {
  const tagsList = props.tags.map((idx) => (
    <li
      style={{
        fontSize: "60%",
        border: "solid 1px black",
        borderRadius: "25px",
        display: "inline-block",
        paddingLeft: "4px",
        paddingRight: "4px",
      }}
    >
      {idx}
    </li>
  ));
  return (
    <div
      className="resource"
      style={{
        position: "relative",
      }}
    >
      <p className="resource-title">{props.title}</p>
      <p className="description">{props.description}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <ul className="tags">{tagsList}</ul>
        <button
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
          }}
        >
          <a href={props.url} target="_blank" rel="noreferrer">
            open
          </a>
        </button>
      </div>
    </div>
  );
};

let resources = [
  {
    hostname: "guidetojapanese.org",
    title: "Resources – Learn Japanese",
    url: "https://guidetojapanese.org/learn/resources/",
    createdAt: 1692573899846,
    description:
      " This page is mentions Tae Kim who writes defacto books on Japanese grammar",
    terms: [],
    tags: ["日本語"],
    links_to: ["https://nihongo-e-na.com/eng/"],
  },
  {
    hostname: "nihongo-e-na.com",
    title: "NIHONGO eな - Portal for Learning Japanese",
    url: "https://nihongo-e-na.com/eng/",
    createdAt: 1692577207937,
    description: "",
    terms: [],
    tags: [],
  },
  {
    hostname: "learnjapanese-teachjapanese.com",
    title:
      "【外国人向け】日本語勉強アプリ2021｜日本語学習・教えるのにおすすめ無料アプリは？英語・中国語圏・日本人の子どもにも",
    url: "https://learnjapanese-teachjapanese.com/?p=1080",
    createdAt: 1692640075055,
    description: "",
    terms: [],
    tags: [],
  },
  {
    hostname: "web-highlights.com",
    title: "Make Your Website Have a Beautiful Thumbnail Link Preview",
    url: "https://web-highlights.com/blog/turn-your-website-into-a-beautiful-thumbnail-link-preview/",
    createdAt: 1692666266664,
    description: "",
    terms: [],
    tags: [],
  },
];

let resourcesList = resources.map((idx) => <Resource props={idx} />);

const Resources = () => {
  // https://stackoverflow.com/questions/7524585/how-do-i-get-the-information-from-a-meta-tag-with-javascript
  const resourceSnippet = {
    hostname: window.location.hostname,
    title: document.title,
    url: window.location.href,
    createdAt: new Date().valueOf(),
    description: "",
    terms: [],
    tags: [],
  };

  return (
    <div className="resources">
      <h2>Resources</h2>
      <p>Maybe I should group them together first</p>
      <Topic props={{ topic: "Japanese" }} />
      <div className="resourceListCotainer">
        <ul>{resourcesList}</ul>
      </div>

      <Topic props={{ topic: "Programming" }} />
    </div>
  );
};

export default Resources;
