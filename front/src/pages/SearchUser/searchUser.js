import React, { useState } from 'react';
import Header from '../../components/Header/header';
import api from '../../services/api';
import * as S from './styles';

const SearchUser = () => {
    const [userNotFound, setUserNotFound] = useState("");
    const [cpfInput, setCpfInput] = useState("");
    const [userInfo, setUserInfo] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSearchUser = async (event) => {
        event.preventDefault();
        setUserInfo("");
        setUserNotFound("");
    
        try {
            setIsLoading(true);
            const response = await api.get(`/users?cpf=${cpfInput}`);
            console.log('response', response);
            const user = response.data;
            setTimeout(() => {
                if (user) {
                    setUserInfo(user);
                }
                setIsLoading(false);
                setCpfInput("");
            }, 3000);
        } catch (err) {
            setTimeout(() => {
                setIsLoading(false);
                setUserNotFound('CANDIDATO NÃO ENCONTRADO!');
                setCpfInput("");
            }, 3000);
        }
    }

    return(
        <>
            <Header title="BUSCA DE CANDIDATOS" headerLink="HOME" route="/" />
            <S.Container>
                <S.Form onSubmit={handleSearchUser}>
                    <input
                    value={cpfInput}
                    onChange={(e) => setCpfInput(e.target.value)}
                    placeholder="Digite o CPF do candidato"
                    />
                    <button type="submit">Pesquisar</button>
                </S.Form>
            </S.Container>
            {isLoading && 
                <S.ContainerLoading>
                    <S.Yellow></S.Yellow>
                    <S.Red></S.Red>
                    <S.Blue></S.Blue>
                    <S.Violet></S.Violet>
                </S.ContainerLoading>
            }
            {userInfo.length !== 0 &&
                <S.ContainerBody>
                    <S.Row>
                        <S.Key>Nome</S.Key>
                        <S.Value>{userInfo?.name}</S.Value>
                    </S.Row>
                    <S.Row>
                        <S.Key>Cargo Pretendido</S.Key>
                        <S.Value>{userInfo?.profession}</S.Value>
                    </S.Row>
                    <S.Row>
                        <S.Key>Cidade</S.Key>
                        <S.Value>{userInfo?.city}</S.Value>
                    </S.Row>
                </S.ContainerBody>
            }
            {userNotFound.length !== 0 &&
                <S.ContainerError>
                    <S.Row>
                        <S.Key>{userNotFound}</S.Key>
                        <S.Value>Digite um CPF válido</S.Value>
                    </S.Row>
                </S.ContainerError>
            }
        </>
    )
}

export default SearchUser;