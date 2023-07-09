import { useState } from 'react';
import TabButton from "./TabButton.component";

const TabButtonList = ({ data, activeIndex, setActiveIndex }) => {
    const activeStyle = "tablinks active";
    let list = data.map((idx, index) => (
      <TabButton
        activeIndex={activeIndex}
	setActiveIndex={setActiveIndex}
        key={index}
        id={idx.defaultOpen ? "defaultOpen" : ""}
        data={data}
        city={idx.city}
	index={idx.index}
        className={idx.defaultOpen ? "active" : "tablinks"}
      />
    ));
  
    return (
        <div className="tab">{list}</div>
    );
  };

  export default TabButtonList;
