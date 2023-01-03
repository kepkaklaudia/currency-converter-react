import { Clock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Time = () => {
  const date = useCurrentDate();
  const formattedDate = date.toLocaleString("pl", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <Clock>
      Dzisiaj jest {formattedDate}
    </Clock>
  );
};

export default Time;