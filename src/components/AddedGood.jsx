import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { goods } from "../goods";
import {
  deleteFromCart,
  addToCart,
  removeFromCart,
} from "../actions/cartActions";
import DeleteIcon from "@mui/icons-material/Delete";
import PlusMinusBtnGroup from "./PlusMinusBtnGroup";

function AddedGood({ id, size, count }) {
  // const addedGood = useSelector((state) => state.cart[id]?.[chosenSize]);
  console.log("AddedGood id", id);

  const addedItemsCount = useSelector((state) => state.cart[id]?.[size]);
  const dispatch = useDispatch();
  const [isPlusBtnDisabled, setIsPlusBtnDisabled] = useState(false);
  const [isMinusBtnDisable, setIsMinusBtnDisable] = useState(false);
  const { inStockSizes } = goods[id];

  useEffect(() => {
    if (inStockSizes[size] === addedItemsCount) {
      setIsPlusBtnDisabled(true);
    } else if (addedItemsCount === 1) {
      setIsMinusBtnDisable(true);
    } else {
      setIsPlusBtnDisabled(false);
    }
  }, [addedItemsCount]);

  // function addToCart() {
  //   dispatch({
  //     type: ADD_TO_CART,
  //     payload: { id, size: size },
  //   });
  // }

  // function removeFromCart() {
  //   dispatch({
  //     type: REMOVE_FROM_CART,
  //     payload: { id, size: size },
  //   });
  // }

  // function deleteFromCart() {
  //   dispatch({
  //     type: DELETE_FROM_CART,
  //     payload: { id, size: size },
  //   });
  // }

  if (!goods[+id]) {
    return `Товар с id ${id} невозможно отобразить, обратитесь в поддержку`;
  }

  return (
    <Card
      sx={{
        display: "flex",
        // flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "30%",
        margin: "50px auto",
        padding: "10px 30px",
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: "100px", width: "100px", marginRight: "25%" }}
        image={goods[+id].imgUrl}
        // image="https://a.lmcdn.ru/product/R/T/RTLADD897501_22025670_1_v2.jpg"
        alt="Good"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {goods[+id].title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {goods[+id].price}$
          </Typography>
        </CardContent>
        <Box>
          <div className="size">Размер {size}</div>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <PlusMinusBtnGroup
            addedItemsCount={addedItemsCount}
            decreaseNumber={() => dispatch(removeFromCart({ id, size }))}
            increaseNumber={() => dispatch(addToCart({ id, size }))}
            isPlusBtnDisabled={isPlusBtnDisabled}
            isMinusBtnDisable={isMinusBtnDisable}
          />
          {/* <DeleteIcon onClick={deleteFromCart} sx={{ cursor: 'pointer'}} /> */}
          <DeleteIcon
            onClick={() => dispatch(deleteFromCart({ id, size }))}
            sx={{ cursor: "pointer" }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          {/* <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton> */}
          <Button />
        </Box>
      </Box>
    </Card>
  );
}

export default AddedGood;
