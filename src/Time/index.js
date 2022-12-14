import { useState, useEffect } from "react";
import { Clock } from "./styled";

const Time = () => {
	const [date, setDate] = useState(new Date());

	const formattedDate = date.toLocaleString("pl", {
		weekday: "long",
		day: "numeric",
		month: "long",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	});

	useEffect(() => {
		const intervalId = setInterval(() => {
			setDate(new Date());
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<Clock>
			Dzisiaj jest {formattedDate}
		</Clock>
	);
};

export default Time;