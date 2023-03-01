import React, {useEffect, useState} from 'react';
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import List from "../../components/List/List";
import ListItem from "../../components/ListItem/ListItem";
import {Quiz} from "../../types";
import axios from "axios";
import Skeleton from "../../components/Skeleton/Skeleton";
import {MOCK_URL} from "../../constants";

const Catalog = () => {
  const [list, setList] = useState<Array<Quiz>>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchQuizs = async () => {
    setIsLoading(true)
    const {data} = await axios.get(MOCK_URL)
    setList(data);
    setIsLoading(false)
  }
  useEffect(() => {
    fetchQuizs()
  },[])
  return (
    <>
      <ButtonBack/>
      <List title={'Catalog'}>
        {
          isLoading
            ? [...Array(3)].map((elem, i) => <Skeleton key={i}/>)
            : list.map((elem, i) => <ListItem key={i} id={elem.id} title={elem.title} description={elem.description}/>)}
      </List>
    </>
  );
};

export default Catalog;