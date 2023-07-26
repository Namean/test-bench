import useFetch from "../../lib/hooks/useFetch";

const Home = () => {
  // const url1 = "https://jsonplaceholder.typicode.com/todos";
  const url2 = "http://172.16.150.190:3001/employees";
  const [data] = useFetch(url2);

  return (
    <>
      {data &&
        data.map((idx, index) => {
          return (
            <p key={index} id={idx.EmployeeId}>
              {idx.FirstName} {idx.LastName}
            </p>
          );
        })}
    </>
  );
};

export default Home;
