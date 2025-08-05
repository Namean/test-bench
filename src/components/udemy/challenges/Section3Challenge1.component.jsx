import "./Section3Challenge1Style.css";

const Section3Challenge1 = ({ state }) => {
  const localhost = `http://localhost:${state.PORT}`;

  const ColorSquare = ({ style }) => {
    return (
      <div
        style={{ backgroundColor: "dodgerblue" }}
        className="product-color"
      ></div>
    );
  };

  let colors = ["black", "blue", "red", "gold", "green", "brown"];
  const ColorSquareList = ({ colors }) => {
    const list = colors.map((idx, index) => <ColorSquare style={idx} />);
  };

  return (
    <>
      <div className="container">
        <article className="product">
          <header>
            <h2 className="product-title">
              Converse Chuck Taylor All Star Low Top
            </h2>
          </header>
          <p className="sale">sale</p>
          <div className="product-container">
            <img
              src={`${state.URL}/img/challenges.jpg`}
              alt="converse Chuck Taylor shoes"
              style={{
                width: "250px",
                height: "250px",
              }}
            />
            <p className="price">
              <strong>$65.00</strong>
            </p>
            <p className="shipping">Free Shipping</p>
            <p>
              Ready to dress up or down these class canvas every day Chucks are
              an everyday wardrobe staple.
            </p>
            <a className="more-info" href={`${localhost}/more-information`}>
              More information &rarr;
            </a>

            <div className="product-colors-container">
              <div className="product-color"></div>
              <div
                style={{ backgroundColor: "dodgerblue" }}
                className="product-color"
              ></div>
              <div
                style={{ backgroundColor: "red" }}
                className="product-color"
              ></div>
              <div
                style={{ backgroundColor: "gold" }}
                className="product-color"
              ></div>
              <div
                style={{ backgroundColor: "lime" }}
                className="product-color"
              ></div>
              <div
                style={{ backgroundColor: "brown" }}
                className="product-color"
              ></div>
            </div>

            <div className="product-details">
              <aside>
                <h3 className="details-title">Product Details</h3>
                <ul className="details-list">
                  <li>Lightweight, durable, canvas</li>
                  <li>Lightly padded footbed for added comfort</li>
                  <li>Iconic Chuck Taylor Ankle patch</li>
                </ul>
                <button className="add-cart">Add to cart</button>
              </aside>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Section3Challenge1;
