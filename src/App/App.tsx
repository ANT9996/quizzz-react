import React from 'react';
import c from './App.module.scss'
import MainMenu from "../pages/MainMenu/MainMenu";
import {Route, Routes} from "react-router-dom";
import Catalog from "../pages/Catalog/Catalog";
import Help from "../pages/Help/Help";
import Create from "../pages/Create/Create";
import Rules from '../pages/Rules/Rules';
import FullQuiz from '../pages/FullQuiz/FullQuiz';

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
    </div>
  );
}

export default App;
