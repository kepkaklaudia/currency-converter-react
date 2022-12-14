import { currencies } from "../currencies.js";
import { useState } from "react";
import { Fieldset, Legend, Text, Input, Select, Button, Paragraph, Strong } from "./styled";

const Form = () => {
  const [amount, setAmount] = useState("0.00");
  const [currency, setCurrency] = useState(currencies[0].short);
  const [result, setResult] = useState("");

  const onInputChange = ({ target }) => setAmount(target.value);

  const onSelectChange = ({ target }) => setCurrency(target.value);

  const calculateResult = (amount, currency) => {
    const { rate, short } = currencies.find(({ short }) => short === currency);

    setResult(`${(+amount / rate).toFixed(2)}\u00A0${short}`);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>
          Kalkulator walut
        </Legend>
        <p>
          <label>
            <Text>Kwota PLN*</Text>
            <Input
              type="number"
              title="Kwota PLN do przeliczenia"
              step="0.1"
              min="0"
              max="999999999999"
              value={amount}
              onChange={onInputChange}
              required
            />
          </label>
        </p>
        <p>
          <label>
            <Text>Wybierz walutę</Text>
            <Select
              title="Na jaką walutę przeliczyć PLN"
              value={currency}
              onChange={onSelectChange}
            >
              {currencies.map((currency) => (
                <option
                  key={currency.short}
                  value={currency.short}
                >
                  {currency.name}
                </option>
              ))};
            </Select>
          </label>
        </p>
        <p>
          <Button>
            Przelicz kwotę!
          </Button>
        </p>
        <Paragraph condition>*Wartość wymagana</Paragraph>
        <Paragraph amount>Nowa kwota wynosi:<Strong> {result}</Strong></Paragraph>
      </Fieldset>
    </form>
  )
};

export default Form;