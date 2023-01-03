import styled from "styled-components";

export const MoneyIcon = styled.div`
  font-size: 50px;
  animation: go 1s ease 5s 1 normal forwards;

  @keyframes go {
    0% {
      opacity: 1;
      transform: rotate(0) scale(1);
    }

    25% {
      opacity: 1;
      transform: rotate(0) scale(3);
    }

    100% {
      opacity: 0;
      transform: rotate(-540deg) scale(0);
    }
  }

  @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}) {
    font-size: 30px;
  }
`;

export const Paragraph = styled.p`
  font-size: 20px;
  text-align: center;
  margin-top: 120px;
  color: ${({theme}) => theme.color.crimson};

  @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}) {
    font-size: 16px;
    margin-top: 170px;
  }
`;