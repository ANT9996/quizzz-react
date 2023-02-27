import React, {useEffect, useState} from 'react';
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import List from "../../components/List/List";
import ListItem from "../../components/ListItem/ListItem";
import {Quiz} from "../../types";
import axios from "axios";
import Skeleton from "../../components/Skeleton/Skeleton";

const Catalog = () => {
  const [list, setList] = useState<Array<Quiz>>([])
  const [isLoading, setIsLoading] = useState(true)
  // const list:Quiz[] = [
  //   {
  //     id: 1,
  //     title: 'Quiz #1',
  //     description: 'IT, Games',
  //     quests: [
  //       {
  {/*        title: '#1 question',*/}
  {/*        description: '#1 description',*/}
  //         answers: [
  //           {title: '#1 answer', correct: true,},
  //           {title: '#2 answer', correct: false,},
  //           {title: '#3 answer', correct: false,},
  //           {title: '#4 answer', correct: false,},
  //         ]
  {/*      },*/}
  {/*      {*/}
  {/*        title: '#2 question',*/}
  {/*        description: '#2 description',*/}
  {/*        answers: [*/}
  //           {title: '#1 answer', correct: false,},
  //           {title: '#2 answer', correct: false,},
  //           {title: '#3 answer', correct: true,},
  //           {title: '#4 answer', correct: false,},
  //         ]
  //       },
  //     ]
  //   }
  // ];
  const fetchQuizs = async () => {
    setIsLoading(true)
    const {data} = await axios.get('https://63e7d8a5ac3920ad5be4f661.mockapi.io/Quizs')
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