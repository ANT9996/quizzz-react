import React, {useEffect, useState} from 'react';
import {ButtonBack, List, Skeleton, ListItem} from "../../components/";
import {Quiz} from "../../types";
import axios from "../../axios";
import {MOCK_URL} from "../../constants";
import NavBar from "../../components/NavBar/NavBar";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import {useStore} from "../../store";
import useInput from "../../hooks/useInput";
import c from './Catalog.module.scss'
const Catalog = () => {
  const [list, setList] = useState<Array<Quiz>>([])
  const [isLoading, setIsLoading] = useState(true)
  const search = useInput()
  const {user} = useStore()
  const fetchQuizs = async () => {
    setIsLoading(true)
    const {data} = await axios.get(MOCK_URL)
    setList(data);
    setIsLoading(false)
    return data
  }
  useEffect(() => {
    fetchQuizs().then(r => {
      console.log(r)})
  },[])

  const deleteQuiz = async (id:string) => {
    try {
      await axios.delete(MOCK_URL+id)
      const newList = list.filter(elem => elem._id !== id)
      console.log(newList)
      setList(newList)
    } catch (err) {
      console.warn(err)
    }
  }
  return (
    <>
      <NavBar>
        <ButtonBack/>
        <ProfileCard/>
      </NavBar>

        <h2 className={c.title}>Каталог</h2>
        <input type="text" {...search} className={c.searchInput} placeholder={'Поиск...'}/>
        <List>
        {
          isLoading
            ? [...Array(1)]
                  .map((_, i) => <Skeleton key={i}/>)
            : list
                  .filter(elem =>
                      elem.title.toLowerCase().includes(search.value.toLowerCase()) || elem.description.toLowerCase().includes(search.value.toLowerCase())
                  )
                  .map((elem, i) => <ListItem
                      key={elem._id}
                      index={i}
                      _id={elem._id}
                      author_id={elem.author_id}
                      title={elem.title}
                      description={elem.description}
                      deletable={user ? elem.author_id === user._id : false}
                      onClickDelete={(id) => deleteQuiz(id)}
                  />)}
      </List>
    </>
  );
};

export default Catalog;