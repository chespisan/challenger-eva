import { FormEvent } from 'react';
import './Login.container.css';

export const LoginContainer = () => {
  
  const handleSubmit = (event: FormEvent<HTMLElement>) => {
    event.preventDefault()
    console.log('clic');
  }

  
  return (
    <div className='login-container'>

      <form className='login-container__form' onSubmit={handleSubmit}>
        <input type="text" placeholder='ingrese su nombre' />
        <input type="password" placeholder='ingrese su password' />
        <button  type='submit'> ingresar </button>
      </form>

    </div>
  )
}
