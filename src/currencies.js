import { useState, useEffect } from "react";

export const useData = () => {
  const [rates, setRates] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://api.exchangerate.host/latest?base=PLN")
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setRates(Object.keys(data.rates));
        setDate(data.date);
      } catch (error) {
        console.error("Coś złego się stało!", error);
      }
    };
    getData();
  }, []);

  return { rates, date };
};