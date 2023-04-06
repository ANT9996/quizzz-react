import React, {useEffect, useState} from 'react';
import {ButtonBack, List, Skeleton, ListItem} from "../../components/";
import {Quiz} from "../../types";
import axios from "axios";
import {MOCK_URL} from "../../constants";

const Catalog = () => {
  const [list, setList] = useState<Array<Quiz>>([])
  const [isLoading, setIsLoading] = useState(true)
  // const [deletable, setDeletable] = useState<boolean>(false)
  const deletable:boolean = false

  const fetchQuizs = async () => {
    setIsLoading(true)
    const {data} = await axios.get(MOCK_URL)
    setList(data);
    setIsLoading(false)
  }
  useEffect(() => {
    fetchQuizs()
  },[])

  const deleteQuiz = async (id:string) => {
    try {
      await axios.delete(MOCK_URL+'/'+id)
      const newList = list.filter(elem => elem.id !== id)
      console.log(newList)
      setList(newList)
    } catch (err) {
      console.warn(err)
    }
  }
  return (
    <>
      <ButtonBack/>
      <List title={'Catalog'}>
        {
          isLoading
            ? [...Array(1)].map((elem, i) => <Skeleton key={i}/>)
            : list.map((elem, i) => <ListItem key={i} id={elem.id} title={elem.title} description={elem.description} deletable={deletable} onClickDelete={(id) => deleteQuiz(id)}/>)}
      </List>
    </>
  );
};

export default Catalog;