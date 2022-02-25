import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../../components/button/Button.component';
import './Login.container.css';

export const LoginContainer = () => {
  const history = useNavigate();


  const handleSubmit = (event: FormEvent<HTMLElement>) => {
    event.preventDefault()
    history('/crypto');
  }


  return (
    <div className='login-container'>

      <form className='login-container__form' onSubmit={handleSubmit}>
        <input type="text" placeholder='ingrese su nombre' />
        <input type="password" placeholder='ingrese su password' />
        <ButtonComponent type='submit' children='Ingresar' />
      </form>

    </div>
  )
}
