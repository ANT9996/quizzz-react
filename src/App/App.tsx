import React from 'react';
import c from './App.module.scss'
import {Route, Routes} from "react-router-dom";
import {MainMenu, Catalog, Help, Create, Rules, FullQuiz} from "../pages";
import {Background} from "../components";

function App() {
  return (
    <div className={c.App}>
      <div className={c.body}>
        <Routes>
          <Route path={'/'} element={<MainMenu/>}/>
          <Route path={'/catalog'} element={<Catalog/>}/>
          <Route path={'/help'} element={<Help/>}/>
          <Route path={'/create'} element={<Create/>}/>
          <Route path={'/rules'} element={<Rules/>}/>
          <Route path={'/quiz/:id'} element={<FullQuiz/>} />
        </Routes>
      </div>
      <Background/>
    </div>
  );
}

export default App;
