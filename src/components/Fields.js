import Button from "@mui/material/Button";
import RemoveIcon from "@mui/icons-material/Remove";
import Stack from "@mui/material/Stack";

const Fields = ({ key, name, email, index }) => {
  return (
    <div className="data_val">
      <h4>{name}</h4>
      <h4>{email}</h4>
      <Stack>
        <Button variant="outlined" color="error">
          <RemoveIcon />
        </Button>
      </Stack>
    </div>
  );
};

export default Fields;
