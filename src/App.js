import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './components/require-auth/RequireAuth';
import Shipment from './components/Shipment/Shipment';
import Dashboard from './components/Admin/Dashboard';
import AllProducts from './components/Admin/AllProducts';
import AddProducts from './components/Admin/AddProducts';
import AdminNav from './components/Admin/AdminNav';
import { useLocation } from 'react-router-dom';
import useGetData from './custom-hooks/useGetData';
import ProductDetailsCard from './components/ProductDetails/ProductDetailsPage/ProductDetailsCard';

function App() {

  const location = useLocation();

  return (
    <>
    {location.pathname.startsWith("/dashboard") ? <AdminNav /> : <Header />}
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/shop/product-details' element={<ProductDetailsCard />}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/shipment' element={
          <RequireAuth>
            <Shipment></Shipment>
          </RequireAuth>
        }></Route>

        {/* Dashboard routes */}
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }></Route>
        <Route path='dashboard/all-products' element={
            <AllProducts />
        }></Route>
        <Route path='dashboard/add-products' element={
            <AddProducts />
        }></Route>
        <Route path='dashboard/users'>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </>
  )
}

export default App;
