import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { UserLayout } from './components/UserLayout/UserLayout';
import { Category } from './pages/Category';
import { Cart } from './pages/Cart';
import { About } from './pages/About';
import { Help } from './pages/Help';
import { ProductDetail } from './pages/ProductDetail/ProductDetail';
import { NotFound } from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="/category/:categoryId" element={<Category />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path="*" element={<NotFound />} />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
