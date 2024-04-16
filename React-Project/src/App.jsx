import React from "react";
import {Routes,Route, useLocation} from "react-router-dom";
import Home from "./components/Home";
import Description from "./components/Description";
import Loading from "./components/Loading";
import { Link } from "react-router-dom";

function App(){

  const {pathname,search} = useLocation();

  return(
    <div className="w-full h-screen bg-zinc-300 flex relative">
      {(pathname != "/" || search.length > 0) && <Link to="/" className="text-red-300 text-3xl absolute top-[45%] left-[5%]">Home</Link>}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/description/:id" element={<Description/>}></Route>
      </Routes>
    </div>
  )
}

export default App;