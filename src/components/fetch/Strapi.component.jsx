import useFetch from "../../lib/hooks/useFetch";

const Strapi = () => {
  const [data] = useFetch("http://170.187.207.52:3002/api/restaurants");

  if (data) {
    let restaurants = data.data.map((idx) => idx.attributes);
    let list = restaurants.map((idx) => <li>{idx.Name}</li>);
    return <>{data && list}</>;
  }

  // return (
  //   <>
  //     {data &&
  //       data.map((item) => {
  //         return <p key={item.id}>{item.title}</p>;
  //       })}
  //   </>
  // );
};

export default Strapi;
