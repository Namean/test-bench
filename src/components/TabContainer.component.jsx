import { useState } from "react";
import TabButtonList from "./TabButtonList.component";
import TabContentList from "./TabContentList.component";
import cities from "../data/cities";

const TabContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      
      <TabButtonList
        data={cities}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <TabContentList
        data={cities}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </>
  );
};

export default TabContainer;
