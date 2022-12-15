import { Clock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Time = () => {
	const formattedDate = useCurrentDate();

	return (
		<Clock>
			Dzisiaj jest {formattedDate}
		</Clock>
	);
};

export default Time;