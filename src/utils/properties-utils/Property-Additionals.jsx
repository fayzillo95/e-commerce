import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import TextField from '@mui/material/TextField';

export function Additionals() {

  return (
    <div className="container mx-auto grid grid-cols-3 gap-x-5 gap-y-6 p-6 shadow-2xl">
      <TextField label="Price"></TextField>

      <TextField
        label="Label"

      ></TextField>
      <TextField
        label="Material"

      ></TextField>
      <div>
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select>
            <MenuItem value={"Sale"} ></MenuItem>
            <MenuItem value={"Rent"} ></MenuItem>
          </Select>
        </FormControl>
      </div>
      <TextField
        label="Roms"

      ></TextField>
      <TextField
        label="Beds"

      ></TextField>
      <TextField
        label="Baths"

      ></TextField>
      <TextField
        label="Garages"

      ></TextField>
      <TextField
        type="date"
        fullWidth
        placeholder="Year Build"
      />
      <TextField
        label="Home Area"

      ></TextField>
      <TextField
        label="Lot Dimensions"

      ></TextField>
      <TextField
        label="Lot Area"

      ></TextField>
    </div>
  );
}
