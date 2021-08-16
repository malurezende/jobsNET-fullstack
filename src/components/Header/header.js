import React from 'react';
import * as S from './styles';

const Header = () => {
    return (
        <S.Container>
            <h1>JOBS NET</h1>
            <S.Nav>
                <li>Home</li>
                <li>História</li>
                <li>Contato</li>
            </S.Nav>
        </S.Container>
    )
}

export default Header;