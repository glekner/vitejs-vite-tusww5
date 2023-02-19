import "./App.css";

function App() {
  return <div className="App">{moduleElement}</div>;
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

export default App;
