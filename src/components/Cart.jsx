import Header from "./Header";
import AddedGood from "./AddedGood";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_CART } from "../actions/cartActions";
import { Typography } from "@mui/material";
import { goods } from "../goods";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  let mappedObject = {};
  Object.keys(cart).forEach((id) => {
    const singleTotalItems = Object.values(cart[id]).reduce(
      (acc, cur) => cur + acc
    );
    mappedObject[id] = singleTotalItems;
  });

  const totalPrice = Object.keys(mappedObject).reduce((acc, cur) => {
    const itemPrice = goods.find((item) => item.id === +cur).price;
    return acc + itemPrice * mappedObject[cur];
  }, 0);

  const flatStore = Object.entries(cart).map(item => [item[0], Object.entries(item[1])]);

  return (
    <div className="Cart">
      <Header />
      <h2>Корзина</h2>
      <div className="cart__box">
        <Button
          sx={{ textTransform: "none" }}
          variant="outlined"
          size="small"
          onClick={() =>
            dispatch({
              type: CLEAR_CART,
            })
          }
        >
          Очистить корзину
        </Button>
        {flatStore.map(([id, sizes]) => sizes.map(([size, count]) => <AddedGood id={id} size={size} count={count} />))}
        <Typography sx={{ marginBottom: "50px" }}>{totalPrice} $</Typography>
        <Button variant="contained">Оформить заказ</Button>
      </div>
    </div>
  );
}

export default Cart;
