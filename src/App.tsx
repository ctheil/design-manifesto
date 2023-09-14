import "./App.css";
import Article from "./components/Article";

function App() {
  return (
    <section className="main">
      <Article />
      <Article />
      <div className="intro"></div>
      <div className="flex">
        <div className="title"></div>
        <div className="body"></div>
      </div>
    </section>
  );
}
/*
 *
      <Nav />
      <div className="logo__box">
        <h1 className="h1">Stop Designing for the Monoculture</h1>
        <h2 className="h2">
          A Design Manifesto by Caleb Theil, Mel, Beth, Gerardo
        </h2>
      </div>
 */

export default App;
