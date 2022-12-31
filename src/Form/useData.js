import { useState, useEffect } from "react";

export const useData = () => {
  const [rates, setRates] = useState([]);
  const [date, setDate] = useState();
  const [short, setShort] = useState([]);
  const [loading, setLoading] = useState("loading");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://api.exchangerate.host/latest?base=PLN")
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setShort(Object.keys(data.rates));
        setDate(data.date);
        setRates(data.rates);
        setLoading("success");
      } catch (error) {
        console.error("Ups... Coś złego się stało!🤨", error);
        setLoading("error");
      }
    };
    setTimeout(getData, 3000);
  }, []);

  return { rates, date, short, loading };
};