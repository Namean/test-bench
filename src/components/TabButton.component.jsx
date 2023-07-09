import {useEffect} from 'react';



const TabButton = ({ id, city, data, index, activeIndex, setActiveIndex}) => {
	useEffect(() => {}, [activeIndex])
  return (
    <div>
      <button
        id={id}
        className={id === "defaultOpen" ? "tablinks active" : "tablinks"}
        onClick={(e) => {
		setActiveIndex(index);
		console.log(index === activeIndex);
	}}
      >
        {city}
      </button>
    </div>
  );
};

export default TabButton;
