import { motion } from 'framer-motion'
import React, {FC, useState} from 'react'
import { Link } from 'react-router-dom'
import c from './ListItem.module.scss'
import '../../styles/button_light.scss'
import trashIcon from '../../assets/img/trash.svg'
interface ItemTypes {
  id: string
  title: string
  description: string
  deletable: boolean
  onClickDelete: (id:string) => void
}

const ListItem:FC<ItemTypes> = ({id, title, description, deletable , onClickDelete}) => {
  const [deleting, setDeleting] = useState<boolean>(false)
  const clickDel = async () => {
    setDeleting(true)
    await onClickDelete(id)
    setDeleting(false)
  }
  return (
    <motion.div className={c.item} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
      <div className={c.item_content}>
        <div className={c.item_head}>{title}</div>
        <div className={c.item_description}>
          {description.substring(0,50)}
        </div>
      </div>
      <div className={`${c.buttons}`}>
        <Link to={'/quiz/'+id}><button className={'button_light'}>Начать</button></Link>
        {deletable && <button disabled={deleting} onClick={clickDel} className={`button_light ${c.delete}`}><img src={trashIcon} alt=""/></button>}
      </div>
    </motion.div>
  );
};

export default ListItem;