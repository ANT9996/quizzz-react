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
      <div style={{width: 500}}>Backend находится на бесплатной площадке, что-бы запросы доходили до сервера нужно подождать пока он запустится (сервер автоматически отключается если нет запросов)</div>
      <Background/>
      <NotificationContainer/>
    </div>
  );
}

export default App;
