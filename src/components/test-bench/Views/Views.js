import "./Views.css";
import { useState } from "react";

const Resource = ({ state, idx }) => {
  const [groupMode, setGroupMode] = useState(false);
  const [virtual_groupId, set_virtualGroupId] = useState(idx.group_id);

  const localState = {
    virtual_groupId: virtual_groupId,
    set_virtualGroupId: set_virtualGroupId,
    groupMode: groupMode,
    setGroupMode: setGroupMode,
  };

  const handleGroupId = (input) => {
    if (input === 1) return "many-to-many relationship SQL";
    if (input === 2) return "how to remove record in MongoDB";
  };

  const incrementVirtualGroupId = ({ state, localState, idx }) => {
    localState.set_virtualGroupId((localState.virtual_groupId += 1));
  };

  const decrementVirtualGroupId = ({ state, localState, idx }) => {
    localState.set_virtualGroupId((localState.virtual_groupId -= 1));
  };

  const editModeButtonClickHandler = ({ state, localState }) => {
    if (state.editMode === true) state.setEditMode(false);
    if (state.editMode === false) state.setEditMode(true);
  };

  return (
    <div className="resource-list-item-container">
      <h2 style={{ fontSize: "30px", marginLeft: "0px" }}>{virtual_groupId}</h2>
      <input
        style={{
          visibility: localState.groupMode === true ? "" : "hidden",
        }}
        type={"checkbox"}
      />
      <p>{handleGroupId(idx.group_id)}</p>

      <li className="resource-list-item">
        <a href={idx.url} key={idx.index}>
          {idx.url}
        </a>
      </li>
      <button
        style={{
          backgroundColor: state.editMode ? "green" : "red",
        }}
        onClick={() => editModeButtonClickHandler({ state, localState })}
      >
        edit mode
      </button>

      <button
        onClick={() => decrementVirtualGroupId({ state, localState, idx })}
      >
        decrement
      </button>
      <button
        onClick={() => incrementVirtualGroupId({ state, localState, idx })}
      >
        increment
      </button>
    </div>
  );
};

const Views = () => {
  const [editMode, setEditMode] = useState(false);

  const state = {
    editMode: editMode,
    setEditMode: setEditMode,
  };

  const resources = [
    {
      url: "https://example.com/",
      group_id: 1,
    },
    {
      url: "https://greatweb.com",
      group_id: 2,
    },
    {
      url: "https://www.youtube.com/watch?v=xxpc-HPKN28&t=182s",
      title: "Statistics - A Full University Course on Data Science Basics",
      createdAt: 1693947701043,
      group_id: 3,
      tags: ["statistics", "mathematics", "math", "data science"],
    },
    {
      query: "tags database design",
      serp_followed_page: {
        url: "https://leetcode.com/discuss/interview-question/system-design/838025/Design-a-tagging-system-like-tags-used-in-stack-overflow",
        createdAt: "",
        desciption:
          "A leet code forum page about desinging a tagging system similar to Stack Overflow",
        sub_pages: [
          {
            title: "Tagging System",
            url: "https://justpaste.it/b26kl",
            desciption:
              "This page has an entire specification for system-design of a tagging system, which makes this a very high quality resource!",
            page_quality: 0.85,
          },
        ],
      },
    },
  ];

  const ResourcesListComponent = ({ state }) => {
    const listItems = resources.map((idx, index) => (
      <Resource state={state} idx={idx} />
    ));

    return (
      <div className="resourcelistcomponent-container">
        <ul>{listItems}</ul>
      </div>
    );
  };

  return (
    <div>
      <h1>Views</h1>
      <h2>{`editMode: ${state.editMode}`}</h2>
      <ResourcesListComponent state={state} />
    </div>
  );
};

export default Views;
