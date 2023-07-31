const ChallengeTwo = () => {
  return (
    <>
      <div
        style={{
          marginLeft: "10px",
        }}
        className="container"
      >
        <article>
          <header>
            <h2>Converse Chuck Taylor All Star Low Top</h2>
          </header>
          <div className="product-container">
            <img
              src="http://localhost:3000/challenges.jpg"
              alt="converse Chuck Taylor shoes"
              style={{
                width: "350px",
                height: "350px",
                marginLeft: "1.25rem",
              }}
            />
            <p>
              <strong>$65.00</strong>
            </p>
            <p>Free Shipping</p>
            <p>
              Ready to dress up or down these class canvas every day Chucks are
              an everyday wardrobe staple.
            </p>
            <a href="#">More information &rarr;</a>

            <div className="product-details">
              <aside>
                <header>Product Details</header>
                <ul>
                  <li>Lightweight, durable, canvas</li>
                  <li>Lightly padded footbed for added comfort</li>
                  <li>Iconic Chuck Taylor Ankle patch</li>
                </ul>
                <button
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Add to cart
                </button>
              </aside>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default ChallengeTwo;
