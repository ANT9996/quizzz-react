import React, {FC, useEffect, useRef, useState} from 'react';
import c from "./AboutButton.module.scss";
import '../../styles/button_light.scss'

const AboutButton: FC<{ description: string | Array<string>, name?: string }> = ({description, name}) => {
  const [showAbout, setShowAbout] = useState<boolean>(false)
  const aboutRef = useRef<HTMLButtonElement>(null)

  const closeAbout = (event: MouseEvent) => {
    if (aboutRef.current)
      if (!event.composedPath().includes(aboutRef.current)) setShowAbout(false)
  }

  useEffect(() => {
    document.addEventListener('click', closeAbout)
    return () => {
      document.removeEventListener('click', closeAbout)
    }
  }, [])

  const onClick = () => {
    setShowAbout(!showAbout)
  }

  return (
    <>
      <button ref={aboutRef} onClick={onClick} className={`${c.about} button_light`}>
        {name || `О наборе`}
      </button>
      <div hidden={!showAbout} className={c.description}>
        {typeof description === 'string'
          ? <div>description</div>
          : description.map((elem, i) =>
            <div key={i}>
              {elem}
              <hr/>
            </div>)
        }

      </div>
    </>
  );
};

export default AboutButton;