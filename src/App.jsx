import "./App.css";
import Card from "./components/Card";
import developers from "./data/developers";

function App() {
  const ListDevelopers = developers.map((l,index) => {
    return <Card key={index} id={l.nid} name={l.nName} profile={l.nProfile} language={l.nlanguage} limage={l.nlimage} image={l.nimage} />
    
  })
  return (
    <div className="App">
      <h1>Developers</h1>
      <div className="container">{ListDevelopers}</div>
    </div>
  );
}

export default App;
