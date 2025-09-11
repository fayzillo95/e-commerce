
import { TextField } from '@mui/material'

function FieldBox({ field, value, setValue,validation }) {

    return (
        <TextField
            margin="normal"
            key={field + Math.random().toString()}
            required
            fullWidth
            id={value + "_id"}
            label={field}
            name="name"
            autoComplete="name"
            value={value}
            onChange={(e) => setValue(field, e.target.value)}
            type={field === "phone" ? "tel" : "text"}
            onKeyDown={(e) => validation(e,field)}
        >

        </TextField>
    )
}

export default FieldBox