import styled, { keyframes } from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Form = styled.form`
    margin-top: 40px;
    min-width: 700px;
    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 2px solid #fff;
        border-right: 0;
        font-size: 18px;
        &::placeholder {
        color: gray;
        }
    }
    
    button {
        width: 210px;
        height: 70px;
        background: #04d361;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background 0.2s;
        font-size: 18px;

        &:hover {
            background: ${shade(0.1, '#04d361')};
            cursor: pointer;
        }
    }
`;

export const ContainerBody = styled.div`
    width: 50%;
    margin: 90px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
    padding: 35px 50px;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;

export const ContainerError = styled.div`
    width: 50%;
    margin: 90px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #fff;
    padding: 35px 50px;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;

export const Row = styled.div`
    text-align: center;
`;

export const Key = styled.h3`
    color: #04d361;
    font-size: 24px;
    margin-bottom: 15px;
    text-transform: uppercase;
`;

export const Value = styled.h5`
    color: #444;
    font-size: 18px;
`;

// LOADING

const bounce = keyframes`
    0%, 50%, 100% {
		transform: scale(1);
		filter: blur(0px);
	}
	25% {
		transform: scale(0.6);
		filter: blur(3px);
	}
	75% {
		filter: blur(3px);
		transform: scale(1.4);
	}
`;

export const ContainerLoading = styled.div`
    display: flex;
	justify-content: center;
	align-items: center;
    margin: 50px auto;

    div {
        width: 3vw;
        height: 3vw;
        border-radius: 100%;
        margin: 2vw;
        background-image: linear-gradient(145deg, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0) 100%);
        animation: ${bounce} 1.5s 0.5s linear infinite;
    }
`;
	
export const Yellow = styled.div`
	background-color: #feb60a;

`;

export const Red = styled.div`
    background-color: #ff0062;
	animation-delay: 0.1s;
`;

export const Blue = styled.div`
    background-color: #00dbf9;
	animation-delay: 0.2s;
`;

export const Violet = styled.div`
    background-color: #da00f7;
	animation-delay: 0.3s;
`;