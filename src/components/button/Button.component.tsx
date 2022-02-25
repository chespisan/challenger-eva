import { FC } from 'react';
import { buttonComponentInterface } from '../../interfaces/button.interface';

import './Button.component.css';


const ButtonComponent: FC<buttonComponentInterface> = ({ children, type, }) => {

  return (
    <button
      className='button-component'
      type={type}
    >
      {children}
    </button>
  )
}


export default ButtonComponent;