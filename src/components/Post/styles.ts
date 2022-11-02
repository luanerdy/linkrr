import styled from 'styled-components';

const StyledPost = styled.div`
	width: 100%;
	aspect-ratio: calc(5 / 3);
	background: #171717;
	border-radius: 1em;
	margin-bottom: 1.25em;

	display: flex;
	justify-content: center;
	align-items: center;

	.container {
		width: 100%;
		height: 90%;
		display: flex;
	}

	.image-user {
		width: 50px;
		height: 50px;
		border-radius: 26.5px;
		margin-right: 18px;
		margin-left: 18px;
	}

	.name-user {
		font-family: 'Lato';
		font-style: normal;
		font-weight: 400;
		font-size: 19px;
		color: #ffffff;
		margin-bottom: 7px;
	}

	.description {
		font-family: 'Lato';
		font-style: normal;
		font-weight: 400;
		font-size: 17px;
		color: #b7b7b7;
		margin-bottom: 20px;
	}
	.link-box {
		width: 411px;
		height: 160px;
		border: 1px solid #4d4d4d;
		border-radius: 11px;
	}
`;

export { StyledPost };
