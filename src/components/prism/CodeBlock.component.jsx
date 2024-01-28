import React, { useEffect } from "react";
import Prism from "prismjs"; // Import Prism.js

const CodeBlock = ({ code, language }) => {
  useEffect(() => {
    // Call the Prism.highlightAll() function after rendering to apply syntax highlighting
    Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};

export default CodeBlock;
