import { Paragraph, Loader } from "./styled";

export const Loading = () => {
  return (
    <><Loader></Loader>
      <Paragraph>
        ⏱ Chwileczkę ⏱<br />
        Trwa ładowanie danych z&nbsp;Europejskiego Banku Centralnego.
      </Paragraph>
    </>
  )
};