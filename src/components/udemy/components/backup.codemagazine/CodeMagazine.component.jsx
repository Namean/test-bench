const CodeMagazine = ({ state }) => {
  const url = `http://${state.ADDR}:${state.PORT}`;
  const imageFolder = `${url}/img/codemagazine`;
  return (
    <div className="container">
      <body>
        <header className="main-header">
          <h1>📘 The Code Magazine</h1>

          <nav>
            <a href="blog.html">Blog</a>
            <a href={url}>Challenges</a>
            <a href={url}>Flexbox</a>
            <a href={url}>CSS Grid</a>
          </nav>
        </header>

        <article>
          <header className="post-header">
            <h2>The Basic Language of the Web: HTML</h2>

            <img
              // http://172.16.150.190:3000/img/codemagazine/laura-jones.jpg
              src={`${imageFolder}/laura-jones.jpg`}
              className="author-img"
              alt="Headshot of Laura Jones"
              height="50"
              width="50"
            />

            <p id="author" className="author">
              Posted by <strong>Laura Jones</strong> on Monday, June 21st 2027
            </p>

            <img
              src={`${imageFolder}/post-img.jpg`}
              alt="HTML code on a screen"
              width="500"
              height="200"
              className="post-img"
            />
          </header>

          <p>
            All modern websites and web applications are built using three
            <em>fundamental</em>
            technologies: HTML, CSS and JavaScript. These are the languages of
            the web.
          </p>

          <p>
            In this post, let's focus on HTML. We will learn what HTML is all
            about, and why you too should learn it.
          </p>

          <h3>What is HTML?</h3>
          <p>
            HTML stands for <strong>H</strong>yper<strong>T</strong>ext
            <strong>M</strong>arkup <strong>L</strong>anguage. It's a markup
            language that web developers use to structure and describe the
            content of a webpage (not a programming language).
          </p>
          <p>
            HTML consists of elements that describe different types of content:
            paragraphs, links, headings, images, video, etc. Web browsers
            understand HTML and render HTML code as websites.
          </p>
          <p>In HTML, each element is made up of 3 parts:</p>

          <ol>
            <li>The opening tag</li>
            <li>The closing tag</li>
            <li>The actual element</li>
          </ol>

          <p>
            You can learn more at
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              rel="noreferrer"
            >
              MDN Web Docs
            </a>
            .
          </p>

          <h3>Why should you learn HTML?</h3>

          <p>
            There are countless reasons for learning the fundamental language of
            the web. Here are 5 of them:
          </p>

          <ul>
            <li>To be able to use the fundamental web dev language</li>
            <li>
              To hand-craft beautiful websites instead of relying on tools like
              Worpress or Wix
            </li>
            <li>To build web applications</li>
            <li>To impress friends</li>
            <li>To have fun 😃</li>
          </ul>

          <p>Hopefully you learned something new here. See you next time!</p>
        </article>

        <aside>
          <h4>Related posts</h4>

          <ul className="related">
            <li>
              <img
                src={`${imageFolder}/related-1.jpg`}
                alt="Person programming"
                width="75"
              />
              <a href={url}>How to Learn Web Development</a>
              <p className="related-author">By Jonas Schmedtmann</p>
            </li>
            <li>
              <img
                src={`${imageFolder}/related-2.jpg`}
                alt="Lightning"
                width="75"
                heigth="75"
              />
              <a href={url}>The Unknown Powers of CSS</a>
              <p className="related-author">By Jim Dillon</p>
            </li>
            <li>
              <img
                src={`${imageFolder}/related-3.jpg`}
                alt="JavaScript code on a screen"
                width="75"
                height="75"
              />
              <a href={url}>Why JavaScript is Awesome</a>
              <p className="related-author">By Matilda</p>
            </li>
          </ul>
        </aside>

        <footer>
          <p>Copyright &copy; 2027 by The Code Magazine.</p>
        </footer>
      </body>
      <button>
        <p style={{ color: "red" }}>♥️</p> Like
      </button>
    </div>
  );
};

export default CodeMagazine;
