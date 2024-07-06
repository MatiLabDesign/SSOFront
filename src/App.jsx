import { useState } from "react";

import "./App.css";

import Principal from "./03templates/Principal/Principal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './04pages/HomePage/HomePage';
import PrincipalPage from './04pages/PrincipalPage/PrincipalPage';
import NuevoPage from './04pages/NuevoPage/NuevoPage';
import LoginPage from "./04pages/LoginPage/LoginPage";
import Login from "./02components/Forms/LoginForm";
import UsuarioPage from "./04pages/UsuariosPage/UsuarioPage";
import OTPage from "./04pages/OTPage/OTPage";
function App() {
  const [count, setCount] = useState(0);

  const onClick1 = () => {
    console.log("hola que tal!!!");
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>}></Route>
          <Route exact path="/login" element={<LoginPage/>}></Route>
          <Route exact path="/principal" element={<PrincipalPage/>}></Route>
          <Route exact path="/usuarios" element={<UsuarioPage/>}></Route>
          <Route exact path="/ot" element={<OTPage/>}></Route>
          <Route exact path="/nuevo" element={<NuevoPage/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
