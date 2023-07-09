import TabContent from "./TabContent.component";

const TabContentList = ({ data, activeIndex, setActiveIndex }) => {
    let list = data.map((idx, index) => (
      <TabContent
        key={index}
	index={index}
        city={idx.city}
        content={idx.content}
	isActive={activeIndex === index}
	onShow={() => setActiveIndex(1)}
      />
    ));
    return <>{list}</>;
  };

  export default TabContentList;
