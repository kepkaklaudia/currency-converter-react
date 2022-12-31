import styled from "styled-components";

export const Paragraph = styled.p`
	font-size: 20px;
	text-align: center;
`;

export const Loader = styled.span`
  transform: translateZ(1px);

	&:after {
  	content: '$';
  	display: block;
  	width: 48px;
		height: 48px;
		border-radius: 50%;
		text-align: center;
		line-height: 40px;
		font-size: 32px;
		font-weight: bold;
		background: #FFD700;
		color: #DAA520;
		border: 4px double ;
		box-sizing: border-box;
		box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, .1);
		animation: coin-flip 7s cubic-bezier(0, 0.2, 0.8, 1) infinite;
		margin: 100px auto 0 auto;

		@media (max-width: 600px) {
			margin-top: 120px;
		}
	}

	@keyframes coin-flip {
 		0%, 100% {
    	animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  	}

  	0% {
    	transform: rotateY(0deg);
  	}

  	50% {
    	transform: rotateY(1800deg);
    	animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  	}

		100% {
    	transform: rotateY(3600deg);
  	}
	} 
`;