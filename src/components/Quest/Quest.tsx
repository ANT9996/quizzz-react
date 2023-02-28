import React, {FC, PropsWithChildren} from 'react';
import {Quest as IQuest} from "../../types";
import c from './Quest.module.scss'

const Quest:FC<PropsWithChildren<IQuest>> = ({id, title, description, activeQuest, children}) => {
  return (
    <div className={c.quest} hidden={activeQuest !== id}>
      <h4 className={c.title}>{title}</h4>
      <h5 className={c.description}>{description}</h5>
      <div className={c.answers}>
        {children}
      </div>
    </div>
  );
};

export default Quest;