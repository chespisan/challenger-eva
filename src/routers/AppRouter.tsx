import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { CryptoContainer } from '../containers/crypto.container/Crypto.container';
import { LoginContainer } from '../containers/login/Login.container';

export const AppRouter = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginContainer />} />
        <Route path='/crypto' element={<CryptoContainer />} />
      </Routes>
    </BrowserRouter>
  )
}
