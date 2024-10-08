import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

interface PlusMinusBtnGroupProps {
  addedItemsCount: number;
  decreaseNumber: () => void;
  increaseNumber: () => void;
  isPlusBtnDisabled: boolean;
  isMinusBtnDisabled?: boolean;
}

function PlusMinusBtnGroup({
  addedItemsCount,
  decreaseNumber,
  increaseNumber,
  isPlusBtnDisabled,
  isMinusBtnDisabled,
}: PlusMinusBtnGroupProps) {
  return (
    <ButtonGroup
      sx={{
        width: '78%',
        margin: '10px auto 0',
      }}
      variant="outlined"
      aria-label="Basic button group"
    >
      <Button onClick={decreaseNumber} disabled={isMinusBtnDisabled}>
        -
      </Button>
      <Button>{addedItemsCount}</Button>
      <Button onClick={increaseNumber} disabled={isPlusBtnDisabled}>
        +
      </Button>
    </ButtonGroup>
  );
}

export default PlusMinusBtnGroup;
