import React from 'react';
import c from './App.module.scss'
import {Route, Routes} from "react-router-dom";
import MainMenu from "../pages/MainMenu/MainMenu";
import Catalog from "../pages/Catalog/Catalog";
import Help from "../pages/Help/Help";
import Create from "../pages/Create/Create";
import Rules from '../pages/Rules/Rules';
import Background from "../components/Background/Background";
import FullQuiz from '../pages/FullQuiz/FullQuiz';
// const MainMenu = React.lazy(() => import('../pages/MainMenu/MainMenu'));
// const Catalog = React.lazy(() => import('../pages/Catalog/Catalog'));
// const Help = React.lazy(() => import('../pages/Help/Help'));
// const Create = React.lazy(() => import('../pages/Create/Create'));
// const Rules = React.lazy(() => import('../pages/Rules/Rules'));
// const FullQuiz = React.lazy(() => import('../pages/FullQuiz/FullQuiz'));
// const Background = React.lazy(() => import('../components/Background/Background'));

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
