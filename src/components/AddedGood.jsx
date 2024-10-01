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
import DeleteFromCartDialog from "./DeleteFromCartDialog";

function AddedGood({ id, size }) {
  const addedItemsCount = useSelector((state) => state.cart[id]?.[size]);
  const dispatch = useDispatch();
  const [isPlusBtnDisabled, setIsPlusBtnDisabled] = useState(false);
  const [isMinusBtnDisabled, setIsMinusBtnDisabled] = useState(
    addedItemsCount === 1
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { inStockSizes } = goods[id];

  useEffect(() => {
    setIsPlusBtnDisabled(inStockSizes[size] === addedItemsCount);
    setIsMinusBtnDisabled(addedItemsCount === 1);
  }, [addedItemsCount, inStockSizes, size]);

  if (!goods[+id]) {
    return `Товар с id ${id} невозможно отобразить, обратитесь в поддержку`;
  }

  return (
    <Card
      sx={{
        display: "flex",
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
            isMinusBtnDisabled={isMinusBtnDisabled}
          />
          <DeleteIcon
            onClick={() => setIsModalOpen(true)}
            sx={{ cursor: "pointer" }}
          />
          <DeleteFromCartDialog open={isModalOpen} handleClose={() => setIsModalOpen(false)} handleDelete={() => dispatch(deleteFromCart({ id, size }))} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Button />
        </Box>
      </Box>
    </Card>
  );
}

export default AddedGood;
