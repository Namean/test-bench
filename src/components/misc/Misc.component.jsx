const people = [
  {
    name: "John",
    age: 28,
  },
  {
    name: "Desmond",
    age: 30,
  },
  {
    name: "Andy",
    age: 42,
  },
];

const Person = ({ props, className }) => {
  const { name, age } = props.data;
  return (
    <div className={props.className ? props.className : ""}>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
};
