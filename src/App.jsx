import "./App.css";
import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

// Reactjs code snippet

const App = () => {

  const a = 20;

  const b = 20;


  // найдите как получить дату и время, также часовой пояс

  const total = a + b;

  const name = "Akram"

  const surname = "Khalilov"

  // создать Компоненты: Main, Footer и импортировать их в App.jsx
  // так же отобразить

  return (
    <div className="App">
      <Header a={a} b={b} total={total} name={name} />
      <Main />
      <Footer />
    </div>
  );
};

export default App;

// jsx = java script + HTML

// npx create-react-app .
