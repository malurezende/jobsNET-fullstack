import React, { useState } from 'react';
import * as S from './styles';
import validation from '../../helpers/validateCPF';
import getAddressViaCep from '../../services/viaCEP';

const ContactForm = () => {
    const [resultCpfValidation, setResultCpfValidation] = useState(true);
    const [fullName, setFullName] = useState("");
    const [personalEmail, setEmail] = useState ("");
    const [celNumber, setCelNumber] = useState("");
    const [birthday, setBirthday] = useState(new Date());
    const [estadoCivil, setEstadoCivil] = useState(""); 
    const [sexo, setSexo] = useState(""); 
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [cep, setCep] = useState("");
    const [cargoPretendido, setCargoPretendido] = useState(""); 
    const [identidade, setIdentidade] = useState(""); 
    const [cpf, setCPF] = useState("");
    const [habilitacao, setHabilitacao] = useState(""); 
    const [carroProprio, setCarroProprio] = useState(""); 
    const [vagaPCD, setVagaPCD] = useState("");

    
   const handleSearchCep = async () => {
       const address = await getAddressViaCep(cep);
       console.log(address);
       setEndereco(address?.logradouro);
       setBairro(address?.bairro);
       setCidade(address?.localidade + " - " + address?.uf); 
   } 

    const callValidateCPF = (cpf) => {
        setResultCpfValidation(validation(cpf));
        setCPF(cpf);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('executei', event.target);
    }

    return (
        <S.Container onSubmit={handleSubmit} noValidate>
                <S.PersonalData>
                    <S.H2>DADOS PRINCIPAIS</S.H2>
                    <S.H3> Informe seus dados principais nos campos abaixo. Ao preencher seu nome, evite abreviações.</S.H3>
                    <S.FormRow>
                        <S.RowLarge>
                            <S.Input 
                                placeholder="Nome Completo"
                                value={fullName} 
                                onChange={(event) => setFullName(event.target.value)}
                                required
                            />
                        </S.RowLarge>
                    </S.FormRow>


                    <S.FormRow>
                        <S.RowMin>
                            <S.Label>Data de nascimento</S.Label>
                            <S.BirthdayPicker
                                value={birthday}
                                onChange={setBirthday}
                                format="dd/MM/y"
                            />

                        </S.RowMin>
                        <S.RowMin>
                            <S.Label>Estado civil</S.Label>
                            <S.SelectBox 
                                value={estadoCivil}
                                onChange={(event) => setEstadoCivil(event.target.value)}
                                name="estado-civil">
                                <option value="solteiro">Solteiro</option>
                                <option value="casado">Casado</option>
                                <option value="viuvo">Viúvo</option>
                                <option value="viuvo">Separado</option>
                            </S.SelectBox>
                        </S.RowMin>
                        <S.RowMin>
                            <S.Label>Sexo</S.Label>
                            <S.SelectBox 
                                value={sexo}
                                onChange={(event) => setSexo(event.target.value)}
                                name="sexo">
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                                <option value="nao-se-aplica">Não se aplica</option>
                                <option value="prefiro-nao-dizer">Prefiro não dizer</option>
                            </S.SelectBox>
                        </S.RowMin>
                    </S.FormRow>

                    <S.H2>DADOS DE CONTATO</S.H2> 
                    <S.H3>Informe os dados solicitados, com atenção especial para o seu e-mail, que poderá ser utilizado em contatos das empresas com você.</S.H3>
                    <S.FormRow>
                        <S.RowMedium>
                            <S.Input 
                                placeholder="Email"
                                value={personalEmail}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </S.RowMedium>
                        <S.RowMedium>
                            <S.Input 
                                placeholder="Celular"
                                value={celNumber}
                                onChange={(event) => setCelNumber(event.target.value)} 
                                required 
                            />
                        </S.RowMedium>  
                    </S.FormRow>

                    <S.FormRow>
                        <S.RowLarge>
                            <S.Input 
                                placeholder="Endereço" 
                                value={endereco}
                                onChange={(event) => setEndereco(event.target.value)}
                                required 
                            />
                        </S.RowLarge>

                        <S.RowMedium>
                            <S.Input 
                                placeholder="Número" 
                                value={numero}
                                onChange={(event) => setBairro(event.target.value)}
                                required 
                            />
                        </S.RowMedium>

                    </S.FormRow>
                    
                    <S.FormRow>
                        <S.RowMedium>
                            <S.Input 
                                placeholder="Bairro" 
                                value={bairro}
                                onChange={(event) => setBairro(event.target.value)}
                                required 
                            />
                    </S.RowMedium>
                        <S.RowMedium>
                            <S.Input 
                                placeholder="Cidade - Estado"
                                value={cidade} 
                                onChange={(event) => setCidade(event.target.value)}
                                required 
                            />
                        </S.RowMedium>
                    </S.FormRow>

                    <S.FormRow>
                        <S.RowMedium>
                            <S.Input 
                                placeholder="CEP - somente números" 
                                value={cep} 
                                onChange={ (event) => setCep(event.target.value)}
                                onBlur={handleSearchCep}
                                required 
                            />
                    </S.RowMedium>
                        <S.RowMedium>
                            <S.Input 
                                placeholder="Cargo pretendido" 
                                value={cargoPretendido}
                                onChange={(event) => setCargoPretendido(event.target.value)}
                                required 
                            />
                        </S.RowMedium>
                    </S.FormRow>

                </S.PersonalData>

                <S.Documents>
                    <S.H2>DOCUMENTOS</S.H2>
                    <S.H3>O número do seu documento será utilizado exclusivamente para validar o cadastramento único no site.</S.H3>
                    <S.FormRow>
                        <S.RowMedium>
                            <S.Input 
                                placeholder="Identidade" 
                                value={identidade}
                                onChange={(event) => setIdentidade(event.target.value)}
                                required 
                            />
                        </S.RowMedium>
                        <S.RowMedium>
                            <S.Input 
                                placeholder="CPF - somente números"
                                value={cpf}
                                onChange={(event) => callValidateCPF(event.target.value)} 
                                required 
                                />
                            {!resultCpfValidation && <S.InputError>*ops!! CPF invalido</S.InputError>}
                        </S.RowMedium>
                    </S.FormRow>

                    <S.FormRow>
                        <S.RowMin>
                            <S.Label>Possui habilitação?</S.Label>
                            <S.SelectBox 
                                value={habilitacao}
                                onChange={(event) => setHabilitacao(event.target.value)}
                                name="habilitacao">
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </S.SelectBox>
                        </S.RowMin>
                        <S.RowMin>
                            <S.Label>Possui carro próprio?</S.Label>
                            <S.SelectBox 
                                value={carroProprio}
                                onChange={(event) => setCarroProprio(event.target.value)}
                                name="carro">
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </S.SelectBox>
                        </S.RowMin>
                        <S.RowMin>
                            <S.Label>Deseja concorrer a vaga PCD?</S.Label>
                            <S.SelectBox 
                                value={vagaPCD}
                                onChange={(event) => setCarroProprio(event.target.value)}
                                name="vagaPCD">
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </S.SelectBox>
                        </S.RowMin>
                    </S.FormRow>
                </S.Documents>

                <S.RowLarge>
                    <S.Button type="submit" value="Enviar" />
                </S.RowLarge>

        </S.Container>
    )
}

export default ContactForm;