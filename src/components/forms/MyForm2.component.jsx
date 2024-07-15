export const MyForm = () => {
  const [_id, set_id] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [loves, setLoves] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [vampires, setVampires] = useState("");

  return (
    <div
      style={{
        marginLeft: "40px",
        diplay: "flex",
        flexDirection: "column",
      }}
    >
      <h2>Unicorn Finder</h2>
      <form>
        <section>
          <label for="_id">_id: </label>
          <input
            className="unicorn"
            type=""
            id="_id"
            name="_id"
            value={unicorn._id}
          />
        </section>

        <section>
          <label for="name">name: </label>
          <input
            className="unicorn"
            type=""
            id="name"
            name="name"
            value={unicorn.name}
          />
        </section>

        <section>
          <label for="dob">dob: </label>
          <input
            onChange={(e) => setDob(e.target.value)}
            className="unicorn"
            type="date"
            id="dob"
            name="dob"
            value={dob}
          />
        </section>

        <section>
          <label for="loves">loves: </label>
          <input
            onChange={(e) => setDob(e.target.value)}
            className="unicorn"
            type="checkbox"
            id="loves"
            name="loves"
            value={loves}
          />
        </section>

        <section>
          <label for="weight">weight: </label>
          <input
            onChange={(e) => {
              // const value = e.target.value;
            }}
            className="unicorn"
            type="number"
            id="weight"
            name="weight"
            value={unicorn.weight}
          />
        </section>
      </form>
    </div>
  );
};
