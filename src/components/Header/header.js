import React from 'react';
import * as S from './styles';
import Logo from '../../assets/jobs-net.png';

const Header = () => {
    return (
        <S.Container>
            <S.HeaderImage src={Logo} alt="" />
            <h1>CADASTRO DE CANDIDATOS</h1>
        
        </S.Container>
    )
}

export default Header;