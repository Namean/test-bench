const MyComponent = ({ _color }) => {
  return (
    <div
      style={{
        border: `solid 5px ${_color}`,
        width: "200px",
        height: "200px",
      }}
    >
      MyComponent
    </div>
  );
};
