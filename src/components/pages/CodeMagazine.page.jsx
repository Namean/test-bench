import "../../styles/CodeMagazine.css";
import "../../styles/CodeMagazineClasses.css";

const imageHostName = "http://localhost:3000/";

const MainNav = () => {
  return (
    <>
      <nav
        className="main-nav flex-child"
        style={{
          display: "inline-block",
        }}
      >
        <a href="blog.html">Blog</a>
        <a href="http://localhost:3000/">Challenges</a>
        <a href="http://localhost:3000/">Flexbox</a>
        <a href="http://localhost:3000/">CSS Grid</a>
      </nav>
    </>
  );
};

const MainHeader = ({ child }) => {
  return (
    <>
      <header className="flex-container-header">
        <div className="title flex-child">📘 The Code Magazine</div>
        {child}
      </header>
    </>
  );
};

const Article = () => {
  return (
    <article>
      <header className="article-header">
        <h2 className="wide-h2 article-title">
          The Basic Language of the Web: HTML
        </h2>
        <p>Published on Monday, June 21st 2027</p>
        <img
          className="author-img"
          src={`http://${state.ADDR}:${state.PORT}/laura-jones.jpg`}
          alt="author"
        />
        <p className="post-info">
          by <strong>Laura Jones</strong>
        </p>
      </header>
      <img
        className="big-img"
        src={`${imageHostName}/post-img.jpg`}
        alt="source code on a computer screen"
      />
      <p>All modern websites and web applications are built using three</p>
      <p>
        <em>fundamental</em> technologies: HTML, CSS and JavaScript. These are
        the languages of the web.
      </p>
      <p>
        In this post, let's focus on HTML. We will learn what HTML is all about,
        and why you too should learn it.
      </p>

      <h2>What is HTML?</h2>
      <p>
        HTML stands for <strong>H</strong>yper<strong>T</strong>ext{" "}
        <strong>M</strong>arkup <strong>L</strong>anguage. It's a markup
        language that web developers use to structure and describe the content
        of a webpage (not a programming language).
      </p>
      <p>
        HTML consists of elements that describe different types of content:
        paragraphs, links, headings, images, video, etc. Web browsers understand
        HTML and render HTML code as websites.
      </p>
      <p>In HTML, each element is made up of 3 parts:</p>
      <ol>
        <li>The opening tag</li>
        <li>The closing tag</li>
        <li>The actual element</li>
        <li>You can learn more at the MDN Web Docs.</li>
        <li>Three</li>
      </ol>
      <h2>Why should you learn HTML?</h2>
      <p>
        There are countless reasons for learning the fundamental language of the
        web. Here are 5 of them:
      </p>
      <ul>
        <li>To be able to use the fundamental web dev language</li>
        <li>
          To hand-craft beautiful websites instead of relying on tools like
          Wordpress or Wix
        </li>
        <li>To build web applications</li>
        <li>To impress friends</li>
        <li>To have fun 😃</li>
      </ul>
      <p>Hopefully you learned something new here. See you next time!</p>
    </article>
  );
};

const imageClassName = "related-posts-img";
const relatedPostData = [
  {
    img: {
      className: { imageClassName },
      src: "http://localhost:3000/related-1.jpg",
      alt: "some random image",
    },
    post: {
      author_name: "Jonas Schmedtmann",
      url: "http://localhost:3000/my_cool_app",
      title: "How to Learn Web Development",
    },
  },
  {
    img: {
      className: { imageClassName },
      src: "http://localhost:3000/related-1.jpg",
      alt: "some random image",
    },
    post: {
      author_name: "Jim Dillon",
      url: "http://localhost:3000/my_cool_app",
      title: "The Unknown Powers of CSS",
    },
  },
  {
    img: {
      className: { imageClassName },
      src: "http://localhost:3000/related-3.jpg",
      alt: "some random image",
    },
    post: {
      author_name: "Matilda Fawkes",
      url: "http://localhost:3000/my_cool_app",
      title: "Why JavaScript is Awesome",
    },
  },
];

// const RelatedPost = ({ data }) => {
//   let _data = data[0];
//   let img = _data.img;
//   let post = _data.post;

//   return (
//     <div>
//       <img className={img.className} src={img.src} alt={img.alt} />
//       <a href={post.url}>{post.title}</a>
//       <p>By {post.author_name}</p>
//     </div>
//   );
// };

const RelatedPostsList = ({ data }) => {
  const items = data.map((idx, index) => {
    let img = data[index].img;
    let post = data[index].post;

    return (
      <div>
        <img className={img.className} src={img.src} alt={img.alt} />
        <a href={post.url}>{post.title}</a>
        <p>By {post.author_name}</p>
      </div>
    );
  });

  return <div className="related-posts-container">{items}</div>;
};

const Aside = () => {
  return (
    <aside>
      <header>
        <h2>Related Posts</h2>
      </header>
      <RelatedPostsList data={relatedPostData} />
    </aside>
  );
};

const Footer = () => {
  return <footer>Copyright &copy; 2027 by The Code Magazine</footer>;
};

const CodeMagazinePage = () => {
  return (
    <div className="container">
      <MainHeader child={MainNav()} />

      <Article />

      <Aside />
      <Footer />
    </div>
  );
};

export default CodeMagazinePage;
