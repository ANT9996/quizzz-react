import { motion } from 'framer-motion'
import React, {FC, useState} from 'react'
import { Link } from 'react-router-dom'
import c from './ListItem.module.scss'
import '../../styles/button_light.scss'
import trashIcon from '../../assets/img/trash.svg'
interface ItemTypes {
  index: number
  _id: string
  author_id: string
  title: string
  description: string
  deletable: boolean
  onClickDelete: (id:string) => void
}

const ListItem:FC<ItemTypes> = ({index= 0, _id, author_id, title, description, deletable , onClickDelete}) => {
  const [deleting, setDeleting] = useState<boolean>(false)
  // const [deletable, setDeletable] = useState<boolean>(false)
  const clickDel = async () => {
    setDeleting(true)
    await onClickDelete(_id)
    setDeleting(false)
  }

  const anim = {
    initial: {opacity:0, transform: 'translateY(-5px)'},
    animate: {opacity:1, transform: 'translateY(0)'},
    transition:{duration:.1+index/2}
  }

  return (
    <motion.div className={c.item} {...anim} >
      {/*<div className={c.author}>{author_id}</div>*/}
      <div className={c.item_content}>
        <div className={c.item_head}>{title}</div>
        <div className={c.item_description}>
          {description.substring(0,50)}
        </div>
      </div>
      <div className={`${c.buttons}`}>
        <Link to={'/quiz/'+_id}><button className={'button_light'}>Начать</button></Link>
        {deletable && <button disabled={deleting} onClick={clickDel} className={`button_light ${c.delete}`}><img src={trashIcon} alt=""/></button>}
      </div>
    </motion.div>
  );
};

export default ListItem;