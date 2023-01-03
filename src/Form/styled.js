import styled, { css } from "styled-components";

export const Fieldset = styled.fieldset`
  border: none;

  @media (max-width:${({theme}) => theme.breakpoint.mobileMax}) {
    text-align: center;
  }
`;

export const Legend = styled.legend`
  border: 1px solid ${({theme}) => theme.color.pesto};
  font-family: 'Cinzel', serif;
  background-color: ${({theme}) => theme.color.gorse};
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  font-size: 20px;
`;

export const Text = styled.span`
  width: 100%;
  max-width: 200px;
  display: inline-block;
  margin-right: 5px;

  @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}) {
    margin-bottom: 5px;
  }
`;

export const Input = styled.input`
  border: 1px solid ${({theme}) => theme.color.sycamore};
  padding: 10px;
  width: 225px;
  max-width: 350px;
  border-radius: 15px;

  &:focus {
    outline: 1px solid ${({theme}) => theme.color.pesto};
  }
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid ${({theme}) => theme.color.pesto};
  border-radius: 15px;
  width: 225px;

  &:focus {
    outline: 1px solid ${({theme}) => theme.color.pesto};
  }
`;

export const Button = styled.button`
  border: 1px solid ${({theme}) => theme.color.pesto};
  border-radius: 10px;
  padding: 10px;
  background-color: ${({theme}) => theme.color.chlorine};
  float: right;
  margin-right: 40px;

  &:focus {
    outline: 1px solid ${({theme}) => theme.color.pesto};
  }
`;

export const Paragraph = styled.p`
  ${({ condition }) => condition && css`
    font-size: 12px;
  `}

  ${({ amount }) => amount && css`
    font-family: 'Cinzel', serif;
    padding-top: 30px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}) {
      padding-top: 0;
      margin-top: 0px;
    }
  `}

  ${({ info }) => info && css`
    font-size: 12px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}) {
      padding-top: 0;
      margin-top: 0px;
    }
  `}

  @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}) {
    display: inline-block;
  }
`;

export const Strong = styled.strong`
  padding-left: 10px;
  font-size: 20px;

  @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}) {
    font-size: 15px;
  }
`;