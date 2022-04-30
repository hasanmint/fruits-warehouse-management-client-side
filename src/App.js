import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import NotFound from './Shared/NotFound/NotFound';
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
