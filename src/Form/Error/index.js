import { Paragraph, MoneyIcon } from "./styled";

export const Error = () => {
  return (
    <><Paragraph>
      Ups... Coś poszło nie tak!😳 <br />
      Czy masz połączenie z&nbsp;internetem?👩‍💻 <br />
      Jeśli tak, to pewnie nasza wina. <br />
      Proszę spróbować później.
      <MoneyIcon>💸</MoneyIcon>
    </Paragraph></>
  )
};