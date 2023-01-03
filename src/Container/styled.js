import styled from "styled-components";

export const Container = styled.main`
  width: 515px;
  height: 370px;
  margin: 100px auto;
  padding: 20px 20px;
  background-color: ${({theme}) => theme.color.beige};
  border: 2px solid ${({theme}) => theme.color.pesto};
  border-radius: 20px;

  @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}) {
    width: 300px;
    height: 450px;
  }
`;