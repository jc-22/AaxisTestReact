import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";

export default function BasicTextField({ ...props }) {
    const { tittle, readOnly, data, setSomething } = props;

    const [result, setResult] = useState(0);

    const adornent = (
        <InputAdornment position="start">
            <span>$</span>
        </InputAdornment>
    );

    useEffect(() => {
        setResult(data);
    }, [data]);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setSomething(inputValue);
    };

    return (
        <Box
            component="form"
            sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
        >
            {!readOnly ? (
                <TextField
                    id="outlined-basic"
                    label={tittle}
                    type="text"
                    variant="outlined"
                    InputProps={{
                        onChange: handleChange,
                        defaultValue: 1,
                        startAdornment: adornent,
                    }}
                />
            ) : (
                <TextField
                    id="outlined-read-only-input"
                    label={tittle}
                    defaultValue={0}
                    InputProps={{
                        readOnly: true,
                        value: parseFloat(result.toFixed(2)),
                        startAdornment: adornent,
                    }}
                />
            )}
        </Box>
    );
}
