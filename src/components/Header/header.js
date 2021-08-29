import React from 'react';
import * as S from './styles';
import Logo from '../../assets/jobs-net.png';

const Header = ({title, headerLink, route}) => {
    return (
        <S.Container>
            <S.HeaderImage src={Logo} alt="" />
            <S.Title>{title}</S.Title>
            <S.Nav to={route}>{headerLink}</S.Nav>
        </S.Container>
    )
}

export default Header;