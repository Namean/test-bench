import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered ${firstName}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first_name">First name:</label>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          type={"text"}
          id="first_name"
          name="first_name"
        />
        <br />
        <label htmlFor="first_name">First name:</label>
        <input type={"text"} id="first_name" name="first_name" />
        <br />
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

export default Form;
