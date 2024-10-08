import './App.css';
import { Route, Routes } from "react-router-dom";
import GoodsList from './components/GoodsList';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GoodsList />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
