import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

function PlusMinusBtnGroup({ addedItemsCount, decreaseNumber, increaseNumber, isPlusBtnDisabled = false, isMinusBtnDisabled = false }) {
  return (
    <ButtonGroup
      sx={{
        width: "78%",
        margin: "10px auto 0",
      }}
      variant="outlined"
      aria-label="Basic button group"
    >
      <Button onClick={decreaseNumber} disabled={isMinusBtnDisabled}>-</Button>
      <Button>{addedItemsCount}</Button>
      <Button onClick={increaseNumber} disabled={isPlusBtnDisabled}>
        +
      </Button>
    </ButtonGroup>
  );
}

export default PlusMinusBtnGroup;