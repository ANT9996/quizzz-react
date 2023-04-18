import React, {FC, PropsWithChildren} from 'react';
import c from  './List.module.scss'
import '../../styles/scroll.scss'

const List:FC<PropsWithChildren> = (p) => {

  return (
    <>
      <div className={`${c.list} scroll`}>
        {p.children}
      </div>
    </>
  );
};

export default List;