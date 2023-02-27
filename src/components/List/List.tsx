import React, {FC, PropsWithChildren, ReactNode} from 'react';
import c from  './List.module.scss'

interface ListTypes {
  title: string
  children: ReactNode
}

const List:FC<PropsWithChildren<ListTypes>> = (p) => {
  return (
    <>
    <h2 className={c.title}>{p.title}</h2>
    <div className={c.list}>
      {p.children}
    </div>
    </>
  );
};

export default List;