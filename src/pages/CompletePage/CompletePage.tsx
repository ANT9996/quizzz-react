import React, {FC} from 'react';

const CompletePage:FC<{count:number, total:number}> = ({count, total}) => {
  return (
    <div>
        Отвечено правильно: {count} из {total}
    </div>
  );
};

export default CompletePage;