import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import PlusMinusBtnGroup from "./PlusMinusBtnGroup";
import { RootState } from "../reducers";
import { IGood } from '../goods';

interface GoodProps {
  good: IGood
}

export default function Good({ good }: GoodProps) {
  const { id, title, price, inStockSizes, imgUrl } = good;
  const sizes = Object.keys(inStockSizes);
  const [chosenSize, setChosenSize] = useState(sizes[0]);
  const [isPlusBtnDisabled, setIsPlusBtnDisabled] = useState(false);
  const addedItemsCount = useSelector((state: RootState) => state.cart[id]?.[chosenSize]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (inStockSizes[chosenSize] === addedItemsCount) {
      setIsPlusBtnDisabled(true);
    } else {
      setIsPlusBtnDisabled(false);
    }
  }, [addedItemsCount, inStockSizes, chosenSize]);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "30%",
        margin: "10px",
        paddingBottom: "20px",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: "100%" }}
        image={imgUrl}
        alt="Good"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {price}$
          </Typography>
        </CardContent>
        <Box>
          <ul className="sizes">
            {sizes.map((size) => (
              <Badge key={size} badgeContent={0} color="primary">
                <li
                  className={size === chosenSize ? "chosenSize" : ""}
                  onClick={() => setChosenSize(size)}
                >
                  {size}
                </li>
              </Badge>
            ))}
          </ul>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          {addedItemsCount ? (
            <PlusMinusBtnGroup
              addedItemsCount={addedItemsCount}
              decreaseNumber={() =>
                dispatch(removeFromCart({ id, size: chosenSize }))
              }
              increaseNumber={() =>
                dispatch(addToCart({ id, size: chosenSize }))
              }
              isPlusBtnDisabled={isPlusBtnDisabled}
            />
          ) : (
            <Button
              variant="contained"
              onClick={() => dispatch(addToCart({ id, size: chosenSize }))}
            >
              Добавить в корзину
            </Button>
          )}
        </Box>
      </Box>
    </Card>
  );
}
