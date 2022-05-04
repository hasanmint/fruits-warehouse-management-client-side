import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import NotFound from './Shared/NotFound/NotFound';
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';
import Inventories from './Pages/Inventories/Inventories';
import InventoryDetail from './Pages/InventoryDetail/InventoryDetail';
import RequireAuth from './Pages/Auth/SocialLogin/RequireAuth';
import CheckOut from './Pages/CheckOut/CheckOut';
import ResetPassword from './Pages/Auth/ResetPassword/ResetPassword';
import Blogs from './Pages/Blogs/Blogs';
import AddInventory from './Pages/AddInventory/AddInventory';
import ManageInventories from './Pages/ManageInventories/ManageInventories';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventories' element={<Inventories></Inventories>}></Route>
        <Route path='/inventory/:inventoryId' element={<InventoryDetail></InventoryDetail>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/addinventory' element={
          <RequireAuth>
            <AddInventory></AddInventory>
          </RequireAuth>
        }></Route>

        <Route path='/manageinventories' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
        }></Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/resetpassword' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
