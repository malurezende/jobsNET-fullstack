import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    padding: 70px 50px;
    box-shadow: 1px 1px 2px 1px #3fd2ef;
    margin-bottom: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderImage = styled.img`
    height: 100px;
`;

export const Title = styled.h1`
    color: #fefefe;
`;

export const Nav = styled(Link)`
    color: #fefefe;
    text-decoration: none; 
    font-size: 18px; 
    font-weight: bold;

    :hover {
        cursor: pointer;
    }
`;