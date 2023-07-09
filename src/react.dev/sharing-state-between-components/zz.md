 # [Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)


Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as lifting state up, and it’s one of the most common things you will do writing React code.


### You will learn
    - How to share state between components by lifting it up
    - What are controlled and uncontrolled components




## Lifting state up by example

- In this example, a parent <code style='background-color: #333'>Accordion</code>
    - Panel
    - Panel

Each Panel component has a boolean isActive state that determines whether its content is visible.


```jsx

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>
          Show
        </button>
      )}
    </section>
  );
}

export default function Accordion() {
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About">
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology">
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}


```

I'm not understanding why the button is not showing after its clicked

Lets do a small refactor to make this a little more readable

```js
function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  const IsActiveTrue = () => {
    return <p>{children}</p>;
  };
  const IsActiveFalse = () => {
    return <button onClick={() => setIsActive(true)}>Show</button>;
  };
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? IsActiveTrue() : IsActiveFalse()}
    </section>
  );
}

```
