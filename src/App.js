import "./App.css";
import Navbar from "./components/navbar";
import Tweets from "./components/tweets";
import Test from "./components/test";

function App() {
  // let  counter= 0;
  // const increment= () =>{
  //        counter +=1;
  //        console.log(counter)
  // }
  return (
    <div className="App">
      <header className="header">header</header>
      <h1>hello world</h1>
      <div className="home">
        {/* <Navbar />
     <Tweets /> */}
        {/* <div>Counter {counter}</div>
    <button onClick={increment} > submit</button> */}
      </div>
      <Test />
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
