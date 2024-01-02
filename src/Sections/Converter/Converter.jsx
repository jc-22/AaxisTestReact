import { useEffect, useState } from "react";
import * as freeCurrencyApi from "../../api/freeCurrency";
import * as config from "../../Config/config";
import BasicTextField from "../../Components/TextField/BasicTextField";
import Box from "../../Components/Box/Box";
import BasicButton from "../../Components/Button/BasicButton";
import BasicSelect from "../../Components/Select/BasicSelect";
import Tittle from "../../Components/Tittle/Tittle";
import { Container } from "@mui/material";


function Main() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [latest, setLatest] = useState(0);
  const [result, setResult] = useState(0);
  const [disabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    freeCurrencyApi
      .fetchCurrencies()
      .then((currencies) => {
        setCurrencies(currencies.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleCalculate = function () {
    freeCurrencyApi
      .fetchLatest(fromCurrency, toCurrency)
      .then((latest) => {
        setLatest(latest.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  useEffect(() => {
    setDisabledButton(config.setDisabledButton(fromCurrency, toCurrency, quantity))
  }, [fromCurrency, toCurrency, quantity])

  useEffect(() => {
    setResult(config.calculateExchange(quantity, latest, toCurrency));
  }, [latest]);

  return (
    <Container>
      <Box className="flex-column just-cont-cent">
        <Tittle h={2} tittle="Free Currency App" className="main-tittle" />
        <Box className="flex-row-to-column-mobile align-s-center">
          <BasicSelect
            data={currencies}
            tittle="From"
            setSomething={setFromCurrency}
          />
          <BasicSelect
            data={currencies}
            tittle="To"
            setSomething={setToCurrency}
          />
        </Box>
        <Box className="flex-column align-i-center">
          <BasicTextField tittle="Quantity" setSomething={setQuantity} />
          <BasicButton tittle="Calculate" onClick={handleCalculate} isDisabled={disabledButton} />
          <BasicTextField tittle="Result" readOnly data={result} />
        </Box>
      </Box>
    </Container>
  );
}

export default Main;
