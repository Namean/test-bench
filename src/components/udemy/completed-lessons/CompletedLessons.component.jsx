const FormCheckBoxItem = ({ props, children }) => {
  return (
    <label>
      <input type="checkbox" checked={props.checked} />
      {props.lesson_number}. {props.label_text}
    </label>
  );
};

const Form = ({ props, children }) => {
  return <form class="my-form">{children}</form>;
};

const Section = ({ props, children }) => {
  const { section_title } = props;
  return (
    <section>
      <header class="section-header">
        <h2 class="section-heading">{section_title}</h2>
      </header>
      <div class="section-content">{children}</div>
    </section>
  );
};

const FormChildren = ({ props, children }) => {
  const data = [
    { lesson_number: 14, label_text: "Section Overview", checked: "checked" },
    {
      lesson_number: 15,
      label_text: "Course Guideline + Code",
      checked: "checked",
    },
    {
      lesson_number: 16,
      label_text: "Environment Setup For Mac",
      checked: "checked",
    },
    {
      lesson_number: 17,
      label_text: "Environment Setup For Windows",
      checked: "checked",
    },
    { lesson_number: 18, label_text: "NPM vs YARN", checked: "checked" },
    {
      lesson_number: 19,
      label_text: "Yihua's VSCode font and settings",
      checked: "checked",
    },
    {
      lesson_number: 20,
      label_text: "VSCode settings update",
      checked: "checked",
    },
    {
      lesson_number: 21,
      label_text: "Create React App - NPX",
      checked: "checked",
    },
    {
      lesson_number: 22,
      label_text: "Create React App - React-Scripts 1",
      checked: "checked",
    },
    {
      lesson_number: 23,
      label_text: "Create React App - React-Scripts 2",
      checked: "checked",
    },
    {
      lesson_number: 24,
      label_text: "Create React App - Everything Else",
      checked: "checked",
    },
    { lesson_number: 25, label_text: "Dont' Eject", checked: "checked" },
    { lesson_number: 26, label_text: "Hooks vs Classes", checked: "checked" },
    {
      lesson_number: 27,
      label_text: "Quick note: react 18 Strict Mode",
      checked: "checked",
    },
    {
      lesson_number: 28,
      label_text: "Monsters Rolodex - Class Components",
      checked: "checked",
    },
    {
      lesson_number: 29,
      label_text: "Monsters Rolodex - Component State",
      checked: "checked",
    },
    {
      lesson_number: 30,
      label_text: "Monsters Rolodex - setState",
      checked: "checked",
    },
    {
      lesson_number: 31,
      label_text: "Monsters Rolodex - States and Shallow Merge",
      checked: "",
    },
    {
      lesson_number: 32,
      label_text: "Monsters Rolodex - setState and Secondary Callback",
      checked: "",
    },
    {
      lesson_number: 33,
      label_text: "Monsters Rolodex - Mapping Arrays to Elements",
      checked: "",
    },
    {
      lesson_number: 34,
      label_text: "Optional: map() + key attribute",
      checked: "",
    },
    {
      lesson_number: 35,
      label_text: "Monsters Rolodex - Keys for Mapping",
      checked: "",
    },
    {
      lesson_number: 36,
      label_text: "Monsters Rolodex - Single Page Application (SPAs)",
      checked: "",
    },
    {
      lesson_number: 37,
      label_text: "Monsters Rolodex - Lifecycle Method: componentDidMount",
      checked: "",
    },
    { lesson_number: 38, label_text: "Optional: Promises", checked: "" },
    {
      lesson_number: 39,
      label_text: "Monsters Rolodex - Renders & Re-renders in React",
      checked: "",
    },
    {
      lesson_number: 40,
      label_text: "Monsters Rolodex - Input Search Box Component",
      checked: "",
    },
    {
      lesson_number: 41,
      label_text: "Monsters Rolodex - Searching & Filtering",
      checked: "",
    },
    {
      lesson_number: 42,
      label_text: "Optional: filter(), includes()",
      checked: "",
    },
    {
      lesson_number: 43,
      label_text: "Monsters Rolodex - Storing Orginal Data",
      checked: "",
    },
    {
      lesson_number: 44,
      label_text: "Monsters Rolodex - Optimizations",
      checked: "",
    },
    {
      lesson_number: 45,
      label_text: "Monsters Rolodex - Understanding Components",
      checked: "",
    },
    {
      lesson_number: 46,
      label_text: "Monsters Rolodex - CardList Component",
      checked: "",
    },
    {
      lesson_number: 47,
      label_text: "Monsters Rolodex - Component Props",
      checked: "",
    },
    {
      lesson_number: 48,
      label_text: "Monsters Rolodex - Rendering and Re-rendering part 2",
      checked: "",
    },
    {
      lesson_number: 49,
      label_text: "Monsters Rolodex - SearchBox Component",
      checked: "",
    },
    {
      lesson_number: 50,
      label_text: "Monsters Rolodex - CSS in React",
      checked: "",
    },
    {
      lesson_number: 51,
      label_text: "Monsters Rolodex - CardList Component",
      checked: "",
    },
    {
      lesson_number: 52,
      label_text: "Quick note on quotes for string interpolation",
      checked: "",
    },
    {
      lesson_number: 53,
      label_text: "Monsters Rolodex - Finishing Touches",
      checked: "",
    },
    {
      lesson_number: 54,
      label_text: "Functional vs Class Components",
      checked: "",
    },
    {
      lesson_number: 55,
      label_text: "Class Component Lifecycle Methods Breakdown",
      checked: "",
    },
    {
      lesson_number: 56,
      label_text: "Monsters Rolodex - Functional Component Intro",
      checked: "",
    },
    {
      lesson_number: 57,
      label_text: "Pure & Impure Functions",
      checked: "",
    },
    {
      lesson_number: 58,
      label_text: "Monsters Rolodex - Hooks: useState",
      checked: "",
    },
    {
      lesson_number: 59,
      label_text: "Monsters Rolodex - Functional Component Re-rendering",
      checked: "",
    },
    {
      lesson_number: 60,
      label_text: "Monsters Rolodex - Infinite Re-rednering",
      checked: "",
    },
    {
      lesson_number: 61,
      label_text: "Monsters Rolodex - Hooks: useEffect",
      checked: "",
    },
    {
      lesson_number: 62,
      label_text: "Monsters Rolodex - Reaming Components",
      checked: "",
    },
    {
      lesson_number: 63,
      label_text: "React v18: Migrating from React v17 + Reactdom v18 Changes",
      checked: "",
    },
    {
      lesson_number: 64,
      label_text: "React v18: Strict Mode Changes",
      checked: "",
    },
    { lesson_number: 65, label_text: "DOM and VirtualDOM", checked: "" },
    { lesson_number: 66, label_text: "React and ReactDOM", checked: "" },
    {
      lesson_number: 67,
      label_text: "React and ReactDOM part 2",
      checked: "",
    },
    {
      lesson_number: 68,
      label_text: "ReactDOM v18 Changes",
      checked: "",
    },
    { lesson_number: 69, label_text: "DOM Paint Flashing", checked: "" },
    {
      lesson_number: 70,
      label_text: "Optional: Git + Github",
      checked: "",
    },
    {
      lesson_number: 71,
      label_text: "Optional: Connecting With SSH To Github",
      checked: "",
    },
  ];

  return data.map((v) => <FormCheckBoxItem props={v} />);
};

export function CompletedLessons() {
  const sectionChildren = [<Form children={<FormChildren />} />];
  return (
    <>
      <main>
        <Section
          props={{ section_title: "Section 3: React Basics" }}
          children={sectionChildren}
        />
      </main>
    </>
  );
}
