/*

section
  header.section-heading
    div.section-content
    {children}

section.section-subheading


*/

const Section = ({ props, children }) => {
  return <section className="section">{children.SectionHeader}</section>;
};

const SectionHeader = ({ props, children }) => {
  const { sectionHeading } = props;

  return (
    <header className="section-header">
      <h2>{children["SectionHeading"]}</h2>
    </header>
  );
};

const SectionContent = ({ props, children }) => {
  return <div className="section-content">{children}</div>;
};

/*
```jsx
<Section className="section">
    <SectionHeader props={} children={} />
    <SectionContent props={} children={} />
</Section>

```
*/
