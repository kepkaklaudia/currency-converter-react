import { useState, useEffect } from "react";

export const useData = () => {
  const [ratesData, setRatesData] = useState({
    status: "loading",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://api.exchangerate.host/latest?base=PLN")
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const { date, rates } = await response.json();

        setRatesData({
          date,
          rates,
          status: "success",
        });

      } catch (error) {
        console.error("Ups... Coś złego się stało!🤨", error);
        setRatesData({
          status: "error",
        });
      }
    };

    setTimeout(getData, 3000);
  }, []);

  return ratesData;
};