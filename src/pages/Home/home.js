import React from 'react';
import ContactForm from '../../components/ContactForm/contactForm';
import Header from '../../components/Header/header';

const Home = () => {
    return (
        <>
            <Header title="CADASTRO DE CANDIDATOS" headerLink="BUSCAR CANDIDATO" route="/search-user"/>
            <ContactForm />
        </>
    )
}

export default Home;