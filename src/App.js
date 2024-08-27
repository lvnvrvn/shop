import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import Header from './components/Header';
import GoodsList from './components/GoodsList';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);
  console.log(cash);

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
