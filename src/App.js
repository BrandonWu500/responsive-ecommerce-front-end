import Cart from './pages/Cart';
import Home from './pages/home/Home';
import Login from './pages/Login';
import ProductInfo from './pages/ProductInfo';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router basename="/responsive-ecommerce-front-end">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product" element={<ProductInfo />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
