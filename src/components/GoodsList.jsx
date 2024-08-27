import Header from './Header';
import Good from './Good';
import { goods } from '../goods';

function GoodsList() {
  return (
    <div className="GoodsList">
      <Header />
      <h2>Товары</h2>
      <div className="goods">
        {goods.map(good => <Good key={good.id} good={good} />)}
      </div>
    </div>
  );
}

export default GoodsList;
