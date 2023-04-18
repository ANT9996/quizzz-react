import React, {FC, useEffect} from 'react';
import c from './App.module.scss'
import {Route, Routes} from "react-router-dom";
import {MainMenu, Catalog, Help, Create, FullQuiz, History} from "../pages";
import {Background, GitButton} from "../components";
import {NotificationContainer} from 'react-notifications';
import Texture from "../components/Texture/Texture";
import AuthPage from "../pages/AuthPage/AuthPage";
import {useStore} from "../store";
const App:FC = () => {
  const {setUser} = useStore()
  const fetchUser = async () => {
    await setUser()
  }

  useEffect(() => {
    fetchUser()
  }, [])



  return (
    <div className={c.App}>
      <h1 style={{color: "white", position: "absolute", left: 0, bottom: '50px', zIndex: 3, background: "gray", padding: '1rem', opacity: .6, userSelect: "none", pointerEvents: "none"}}>В разработке</h1>
      <div className={c.body}>
        <Texture/>
        <Routes>
          <Route path={'/'} element={<MainMenu/>}/>
          <Route path={'/catalog'} element={<Catalog/>}/>
          <Route path={'/help'} element={<Help/>}/>
          <Route path={'/create'} element={<Create/>}/>
          <Route path={'/history'} element={<History/>}/>
          <Route path={'/quiz/:id'} element={<FullQuiz/>} />
          <Route path={'/auth'} element={<AuthPage/>}/>
          <Route path={'/*'} element={<h1>404</h1>}/>
        </Routes>
      </div>
      <GitButton/>
      <Background/>
      <NotificationContainer/>
    </div>
  );
}

export default App;
