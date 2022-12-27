import { useData } from "../currencies.js";
import { useState } from "react";
import { Fieldset, Legend, Text, Input, Select, Button, Paragraph, Strong } from "./styled";

const Form = () => {
  const [amount, setAmount] = useState("0.00");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState("");

  const {rates, date} = useData();

  const onInputChange = ({ target }) => setAmount(target.value);

  const onSelectChange = ({ target }) => setCurrency(target.value);

  const calculateResult = (amount, currency) => {
    setResult(`${(+amount * rates[currency]).toFixed(2)}\u00A0${currency}`);
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
              {rates.map((rates) => (
                <option
                  key={rates}
                  value={rates}
                >
                  {rates}
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
        <Paragraph info>Kursy walut pobrano z Europejskiego Centralnego Banku w dniu {date}</Paragraph>
      </Fieldset>
    </form>
  )
};

export default Form;