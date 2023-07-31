import CodeBlock from "./components/codeblock/CodeBlock.component.jsx";

const CodeBlockContainer = () => {
  const codeExample = `
    const greet = (name) => {
      return 'Hello, ' + name + '!';
    };`;

  return (
    <>
      <div className="container">
        <div className="codeContainer">
          <CodeBlock code={codeExample} language="javascript" />
        </div>
      </div>
    </>
  );
};

export default CodeBlockContainer;
