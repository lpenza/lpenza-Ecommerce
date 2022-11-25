import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { UserLayout } from './components/UserLayout/UserLayout';
import { Category } from './pages/Category';
import { Cart } from './pages/Cart';
import { ProductDetail } from './pages/ProductDetail/ProductDetail';
import { NotFound } from './pages/NotFound/NotFound';
import { CartProvider } from './context/cartContext';
import { SearchProvider } from './context/searchContext';

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path={'/'} element={<UserLayout />}>
                <Route index element={<Home />} />
                <Route path="/category/:categoryId" element={<Category />} />
                <Route path="/product/:productId" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
                <Route />
              </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </SearchProvider>
    </div>
  );
}

export default App;
