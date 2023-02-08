import { Paragraph, Loader } from "./styled";

export const Loading = () => (
  <>
    <Loader />
    <Paragraph>
      ⏱ Chwileczkę ⏱<br />
      Trwa ładowanie danych z&nbsp;Europejskiego Banku Centralnego.
    </Paragraph>
  </>
);