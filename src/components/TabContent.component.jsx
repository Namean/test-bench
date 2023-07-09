const TabContent = ({ city, content, index, isActive, onShow }) => {
  return (
     isActive ? <section style={{display: 'block'}} id={city} className={"tabcontent"}><h3>{city}</h3><p>{content}</p></section> : <section style={{display: 'none'}}></section>
  );

};

export default TabContent;
