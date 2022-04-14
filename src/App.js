import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Header from './components/header/Header';
import Register from './components/Register/Register';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/Register' element={<Register></Register>}></Route>
          <Route path='/products' element={<Product></Product>}></Route>
        </Routes>
    </div>
  );
}

export default App;
