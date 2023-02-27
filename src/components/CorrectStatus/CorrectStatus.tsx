import React, {FC} from 'react';
import c from './CorrectStatus.module.scss'

const CorrectStatus: FC<{ status: boolean, show: boolean }> = ({status}) => {
  return (
    <div className={`${c.status} ${status ? c.correct : c.wrong}`}>
      {
        status
          ? <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink"
                 width="800px" height="800px" viewBox="0 0 335.765 335.765"
                 xmlSpace="preserve">
            <g>
              <g>
                <polygon
                  points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795 		"/>
              </g>
            </g>
          </svg>
          :
          <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 5L4.99998 19M5.00001 5L19 19" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
          </svg>
      }
    </div>
  );
};

export default CorrectStatus;