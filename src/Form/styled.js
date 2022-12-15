import styled, { css } from "styled-components";

export const Fieldset = styled.fieldset`
	border: none;

	@media (max-width: 600px) {
		text-align: center;
	}
`;

export const Legend = styled.legend`
	border: 1px solid #807A2E;
	font-family: 'Cinzel', serif;
	background-color: #FFF45C;
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

	@media (max-width: 600px) {
		margin-bottom: 5px;
	}
`;

export const Input = styled.input`
	border: 1px solid #9c9641;
	padding: 10px;
	width: 225px;
	max-width: 350px;
	border-radius: 15px;

	&:focus {
		outline: 1px solid #807A2E;
	}
`;

export const Select = styled.select`
	padding: 10px;
	border: 1px solid #807A2E;
	border-radius: 15px;
	width: 225px;

	&:focus {
		outline: 1px solid #807A2E;
	}
`;

export const Button = styled.button`
	border: 1px solid #807A2E;
	border-radius: 10px;
	padding: 10px;
	background-color: #ADFF4F;
	float: right;
	margin-right: 40px;

	&:focus {
		outline: 1px solid #807A2E;
	}
`;

export const Paragraph = styled.p`
	${({ condition }) => condition && css`
		font-size: 12px;
	`}

	${({ amount }) => amount && css`
		font-family: 'Cinzel', serif;
  	padding-top: 30px;

		@media (max-width: 600px) {
			padding-top: 0;
			margin-top: 0px;
		}
	`}

	@media (max-width: 600px) {
		display: inline-block;
	}
`;

export const Strong = styled.strong`
	padding-left: 10px;
	font-size: 20px;

	@media (max-width: 600px) {
		font-size: 15px;
	}
`;