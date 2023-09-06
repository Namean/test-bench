import useFetch from "../../lib/hooks/useFetch";

const MyGet = ({ url }) => {
  // const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  const [data] = useFetch(url);
  console.log(data);

  // return (
  //   <>
  //     {data &&
  //       data.map((idx, index) => {
  //         return (
  //           <div>
  //             <p>{Object.keys(idx)}</p>
  //             <p>{idx.userId}</p>
  //           </div>
  //         );
  //       })}
  //   </>
  // );

  return <>{data && data.msg}</>;
};

export default MyGet;
