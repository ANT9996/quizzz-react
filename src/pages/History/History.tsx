import React, {FC, useEffect, useState} from 'react';
import {ButtonBack, HistoryItem} from "../../components";
import c from './History.module.scss'
import '../../styles/scroll.scss'
import {History as IHistory} from "../../types";
import axios from "axios";
import {MOCK_URL_HISTORY} from "../../constants";
import NavBar from "../../components/NavBar/NavBar";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
const History:FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [history, setHistory] = useState<Array<IHistory>>([])

  const fetchHistory = async () => {
    setIsLoading(true)
    const res = await axios.get(MOCK_URL_HISTORY)
    console.log(res.data)
    setIsLoading(false)
    return res
  }
  useEffect(() => {
    fetchHistory()
        .then((r) => setHistory(r.data))
  }, [])

  return (
    <>
      <NavBar>
        <ButtonBack/>
        <ProfileCard/>
      </NavBar>
      {
        !isLoading
          ?
            <div className={c.history}>
              <h2 className={c.head}>Пройденные квизы</h2>
              <div className={`${c.list} scroll`}>
                {history.reverse().map(elem => <HistoryItem key={elem._id} {...elem}/>)}
              </div>
            </div>
          : <h2>Loading...</h2>
      }
    </>
  );
};

export default History;