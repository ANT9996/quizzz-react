import { motion } from 'framer-motion';
import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import c from './ListItem.module.scss'
import '../../styles/button_light.scss'
interface ItemTypes {
  id: string,
  title: string,
  description: string
}

const ListItem:FC<ItemTypes> = ({id, title, description}) => {
  return (
    <motion.div className={c.item} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
      <div className={c.item_content}>
        <div className={c.item_head}>{title}</div>
        <div className={c.item_description}>
          {description.substring(0,50)}
        </div>
      </div>
      <div className={`${c.buttons}`}><Link to={'/quiz/'+id}><button className={'button_light'}>Начать</button></Link></div>
    </motion.div>
  );
};

export default ListItem;