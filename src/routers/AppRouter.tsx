import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { LoginContainer } from '../containers/login/Login.container';

export const AppRouter = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginContainer />} />
      </Routes>
    </BrowserRouter>
  )
}
