import * as React from "react";
import { useTheme } from "@mui/material/styles";
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

export default function Good({ good }) {
  const { id, title, price, inStockSizes, imgUrl } = good;
  const theme = useTheme();
  const sizes = Object.keys(inStockSizes);
  const [chosenSize, setChosenSize] = useState(sizes[0]);
  const [isPlusBtnDisabled, setIsPlusBtnDisabled] = useState(false);
  const addedItemsCount = useSelector((state) => state.cart[id]?.[chosenSize]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (inStockSizes[chosenSize] === addedItemsCount) {
      setIsPlusBtnDisabled(true);
    } else {
      setIsPlusBtnDisabled(false);
    }
  }, [addedItemsCount]);

  // function addToCart() {
  //   dispatch({
  //     type: ADD_TO_CART,
  //     payload: { id, size: chosenSize },
  //   })
  // }

  // function removeFromCart() {
  //   dispatch({
  //     type: REMOVE_FROM_CART,
  //     payload: { id, size: chosenSize },
  //   })
  // }

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
            {/* <Badge badgeContent={4} color="primary">
              <li>xs</li>
            </Badge>
            <Badge badgeContent={0} color="primary">
              <li>s</li>
            </Badge>
            <Badge badgeContent={0} color="primary">
              <li>m</li>
            </Badge>
            <Badge badgeContent={0} color="primary">
              <li>l</li>
            </Badge>
            <Badge badgeContent={1} color="primary">
              <li>xl</li>
            </Badge> */}
          </ul>
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
