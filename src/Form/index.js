import { useData } from "./useData.js";
import { useState } from "react";
import { Fieldset, Legend, Text, Input, Select, Button, Paragraph, Strong } from "./styled";
import { Error } from "./Error/index";
import { Loading } from "./Loading/index";

const Form = () => {
  const [amount, setAmount] = useState("0.00");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState("");

  const { rates, date, short, loading } = useData();

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
      {loading === "loading" ? <Loading></Loading>
        : loading === "error" ? <Error></Error>
          : (<>
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
                    step="0.01"
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
                    {short.map((short) => (
                      <option
                        key={short}
                        value={short}
                      >
                        {short}
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
              <Paragraph condition>
                *Wartość wymagana
              </Paragraph>
              <Paragraph amount>
                Nowa kwota wynosi:
                <Strong> {result}</Strong>
              </Paragraph>
              <Paragraph info>
                Kursy walut pobrano z Europejskiego Centralnego Banku w dniu {date}
              </Paragraph>
            </Fieldset>
          </>)
      }
    </form>
  )
};

export default Form;