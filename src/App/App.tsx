import React from 'react';
import c from './App.module.scss'
import {Route, Routes} from "react-router-dom";
import {MainMenu, Catalog, Help, Create, FullQuiz} from "../pages";
import {Background, GitButton} from "../components";
import {NotificationContainer} from 'react-notifications';
function App() {
  return (
    <div className={c.App}>
      <div className={c.body}>
        <Routes>
          <Route path={'/'} element={<MainMenu/>}/>
          <Route path={'/catalog'} element={<Catalog/>}/>
          <Route path={'/help'} element={<Help/>}/>
          <Route path={'/create'} element={<Create/>}/>
          <Route path={'/quiz/:id'} element={<FullQuiz/>} />
        </Routes>
      </div>
      <GitButton/>
      <Background/>
      <NotificationContainer/>
    </div>
  );
}

export default App;
