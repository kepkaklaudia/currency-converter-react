import styled from "styled-components";

export const Container = styled.main`
  width: 515px;
  height: 370px;
  margin: 100px auto;
  padding: 20px 20px;
  background-color: #fffcce;
  border: 2px solid #807A2E;
  border-radius: 20px;

  @media (max-width: 600px) {
    width: 300px;
    height: 450px;
  }
`;