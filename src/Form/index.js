import "./style.css";
import { useState } from "react";

const Form = () => {

  const [amount, setAmount] = useState("0.00");

  const onInputChange = ({ target }) => setAmount(target.value);

  const [currency, setCurrency] = useState("");

  const onSelectChange = ({ target }) => setCurrency(target.value);

  const onFormSubmit = (event) => {
    event.preventDefault();
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
              <option value="EUR">EUR - Euro</option>
              <option value="USD">USD - Dolar amerykański</option>
              <option value="GBP">GBP - Funt brytyjski</option>
              <option value="CHF">CHF - Frank Szwajcarski</option>
            </select>
          </label>
        </p>
        <p>
          <button className="form__button">Przelicz kwotę!</button>
        </p>
        <p className="form__paragraph form__paragraph--condition">*Wartość wymagana</p>
        <p className="form__paragraph form__paragraph--amount">Nowa kwota wynosi:<strong
          className="form__strong"></strong></p>
      </fieldset>
    </form>
  )
};

export default Form;