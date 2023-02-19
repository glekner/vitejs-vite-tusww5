import "./App.css";

function App() {
  return (
    <div className="App">
      {moduleElement}
      {moduleElement2}
    </div>
  );
}

const moduleElement = (
  <span
    css={`
      font-size: 20rem;
    `}
  >
    content
  </span>
);

const moduleElement2 = (
  <span
    css={{
      fontSize: "20rem",
    }}
  >
    content
  </span>
);

export default App;
