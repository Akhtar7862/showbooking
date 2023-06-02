import "./App.css";
import React, {useState, useEffect} from "react"
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Summary from "./components/Summary/Summary";

function App() {
  const [info, setInfo] = useState([]);

  const fetchdata = async () => {
    const url = "https://api.tvmaze.com/search/shows?q=all";
    const data = await fetch(url);
    const parsedData = await data.json();
    setInfo(parsedData)
  };

  useEffect( () => {
    fetchdata() 
    }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

        <Route exact path="/" element={<Home/>} />

        {info.map((element)=>{
          return <Route exact path={`/${element.show.id}`} element={<Summary summary={element.show.summary} name={element.show.name} id={element.show.id} key={element.show.id}/>} />
        })}
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
