import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({...props}) {
    const { data, tittle, setSomething } = props;

    const [currency, setCurrency] = useState('');
    const [currencies, setCurrencies] = useState([]);
    const [mappedCurrencies, setMappedCurrencies] = useState([]);

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    useEffect(() => {
        setCurrencies(data);
        setMappedCurrencies(Object.entries(currencies));
    }, [data])

    useEffect(() => {
        setSomething(currency);
    }, [currency])

    return (
        <Box sx={{ width: '20rem', margin: '1rem' }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{tittle}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currency}
                    label={tittle}
                    onChange={handleChange}
                >
                    {mappedCurrencies && mappedCurrencies.length > 0 && mappedCurrencies.map((option, index) => (
                        <MenuItem key={index} value={option[1].code}>
                            {option[1].code} - {option[1].name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
