import "./style.css";

const SectionFour = ({ state }) => {
  return (
    <>
      <div className="container">
        <header className="main-header">
          <h1>📘 The Code Magazine</h1>

          <nav>
            <a href="blog.html">Blog</a>
            <a href={state.url}>Challenges</a>
            <a href={state.url}>Flexbox</a>
            <a href={state.url}>CSS Grid</a>
          </nav>
        </header>

        <article>
          <header className="post-header">
            <h2>The Basic Language of the Web: HTML</h2>

            <img
              src={`${state.imgFolder}/laura-jones.jpg`}
              alt="Headshot of Laura Jones"
              height="50"
              width="50"
              className="author-img"
            />

            <p id="author" className="author">
              Posted by <strong>Laura Jones</strong> on Monday, June 21st 2027
            </p>

            <img
              src={`${state.imgFolder}/post-img.jpg`}
              alt="HTML code on a screen"
              width="500"
              height="200"
              className="post-img"
            />
            <button>❤️ Like</button>
          </header>

          <p>
            All modern websites and web pages ares built using three{" "}
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
            <li className="first-li">The opening tag</li>
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
            <li className="first-li">
              To be able to use the fundamental web dev language
            </li>
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
                src={`${state.imgFolder}/related-1.jpg`}
                alt="Person programming"
                width="75"
                height="75"
              />
              <a href={state.url}>How to Learn Web Development</a>
              <p className="related-author">By Jonas Schmedtmann</p>
            </li>
            <li>
              <img
                src={`${state.imgFolder}/related-2.jpg`}
                alt="Lightning"
                width="75"
                height="75"
              />
              <a href={state.url}>The Unknown Powers of CSS</a>
              <p className="related-author">By Jim Dillon</p>
            </li>
            <li>
              <img
                src={`${state.imgFolder}/related-3.jpg`}
                alt="JavaScript code on a screen"
                width="75"
                height="75"
              />
              <a href={state.url}>Why JavaScript is Awesome</a>
              <p className="related-author">By Matilda</p>
            </li>
          </ul>
        </aside>

        <footer>
          <p id="copyright" className="copyright text">
            Copyright &copy; 2027 by The Code Magazine.
          </p>
        </footer>
      </div>
    </>
  );
};

export default SectionFour;
