import "./App.css";
import Message from "./Components/Message";
import Counter from "./Components/Training/Counter";
import ComentList from "./Components/ComentList";
function App() {
  return (
    <div className="app">
      <div className="app__header"></div>
      <Message text="Hello" />
      <Counter />
      <ComentList />
    </div>
  );
}

export default App;
