import React, {FC} from 'react';
import c from "./AboutButton.module.scss";

const AboutButton:FC<{description:string}> = ({description}) => {
  return (
    <button className={c.about}>
      О наборе
      <div className={c.description}>{description}</div>
    </button>
  );
};

export default AboutButton;