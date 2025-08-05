import CodeBlock from "./CodeBlock.component";

const CodeBlockContainer = () => {
  const codeExample = `
    const greet = (name) => {
      return 'Hello, ' + name + '!';
    };`;

  const codeExample2 = `
    const fs = require('fs')
    fs.readFileSync(fileName, { encoding: 'utf-8' })`;

  return (
    <>
      <div className="container">
        <div className="codeContainer">
          <CodeBlock code={codeExample} language="javascript" />
          <CodeBlock code={codeExample2} language="javascript" />
        </div>
      </div>
    </>
  );
};

export default CodeBlockContainer;
