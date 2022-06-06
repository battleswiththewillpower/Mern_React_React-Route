import {BrowserRouter, Routes, Link, Route} from "react-router-dom"
import './App.css';
import Main from './components/Main';
import Home from "./components/Home";


function App() {



  return (
    <BrowserRouter>
    <div>
     <span> Link: </span>
      <Link to="/home"> Home </Link> |
      <Link to="/4">Four</Link> |
      <Link to="/hello">Hello</Link> |
      <Link to="/beauty/lavender/gold">Keyword Combo</Link>

    </div>

    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/:variable" element={<Main  />} >
        <Route path=":color1Param/:color2Param" element={<Main  />}/>
      </Route>
      {/* <Route path="/hello/:color1Param/:color2Param" element={<Color />} /> */}

    </Routes>

    </BrowserRouter>
  );
}

export default App;
