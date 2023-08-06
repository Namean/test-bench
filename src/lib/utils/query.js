let query = {
  query_string: "grep",
  visited_pages: [
    "https://www.regular-expressions.info/quickstart.html#:~:text=The%20most%20basic%20regular%20expression,match%20the%20second%20a%20too.",
  ],
  text_fragments: [
    {
      fragment: ["basic regular expressions (BREs)"],
    },
  ],
};

console.log(query);
