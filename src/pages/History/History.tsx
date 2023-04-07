import React, {FC, useEffect, useState} from 'react';
import {ButtonBack, HistoryItem} from "../../components";
import c from './History.module.scss'
import {History as IHistory} from "../../types";
import axios from "axios";
import {MOCK_URL_HISTORY} from "../../constants";
const History:FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [history, setHistory] = useState<Array<IHistory>>([])

  const fetchHistory = async () => {
    setIsLoading(true)
    const res = await axios.get(MOCK_URL_HISTORY)
    setIsLoading(false)
    return res
  }
  useEffect(() => {
    fetchHistory().then((r) => setHistory(r.data))
  }, [])

  return (
    <>
      <ButtonBack/>
      {
        !isLoading
          ?
            <div className={c.history}>
              <h2 className={c.head}>Пройденные квизы</h2>
              <div className={c.list}>
                {history.map(elem => <HistoryItem key={elem.id} {...elem}/>)}
              </div>
            </div>
          : <h2>Loading...</h2>
      }
    </>
  );
};

export default History;