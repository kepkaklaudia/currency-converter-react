import "./style.css";
import { useState } from "react";
import { currencies } from "../Currencies";

const Form = () => {

  const [amount, setAmount] = useState("0.00");
  const [currency, setCurrency] = useState(currencies[0].short);
  const [result, setResult] = useState("");

  const onInputChange = ({ target }) => setAmount(target.value);

  const onSelectChange = ({ target }) => setCurrency(target.value);

  const calculateResult = (amount, currency) => {
    const { rate, short } = currencies.find(({ short }) => short === currency);

    setResult(`${(+amount / rate).toFixed(2)} ${short}`);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">
          Kalkulator walut
        </legend>
        <p>
          <label>
            <span className="form__text">Kwota PLN*</span>
            <input
              className="form__field"
              type="number"
              title="Kwota PLN do przeliczenia"
              step="0.1"
              min="0"
              max="999999999999"
              value={amount}
              onChange={onInputChange}
              required />
          </label>
        </p>
        <p>
          <label>
            <span className="form__text">Wybierz walutę</span>
            <select
              className="form__select"
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
            </select>
          </label>
        </p>
        <p>
          <button
            className="form__button"
          >Przelicz kwotę!</button>
        </p>
        <p className="form__paragraph form__paragraph--condition">*Wartość wymagana</p>
        <p className="form__paragraph form__paragraph--amount">Nowa kwota wynosi:<strong
          className="form__strong"></strong>{result}</p>
      </fieldset>
    </form>
  )
};

export default Form;