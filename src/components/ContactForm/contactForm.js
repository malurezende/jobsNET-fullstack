import React, { useState } from 'react';
import * as S from './styles';
import validation from '../../helpers/validateCPF';

const ContactForm = () => {
    const [resultCpfValidation, setResultCpfValidation] = useState(true);
    const [fullName, setFullName] = useState("");
    const [personalEmail, setEmail] = useState ("");
    const [celNumber, setCelNumber] = useState("");
    const [birthday, setBirthday] = useState(new Date());
    const [estadoCivil, setEstadoCivil] = useState(""); 
    const [sexo, setSexo] = useState(""); 
    const [endereco, setEndereco] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [cargoPretendido, setCargoPretendido] = useState(""); 
    const [identidade, setIdentidade] = useState(""); 
    const [habilitacao, setHabilitacao] = useState(""); 
    const [carroProprio, setCarroProprio] = useState(""); 


    const [cpf, setCPF] = useState("");

    const callValidateCPF = (cpf) => {
        setResultCpfValidation(validation(cpf));
        setCPF(cpf);
    }

    return (
        <S.Container>
                <S.PersonalData>
                    <S.H2>DADOS PESSOAIS</S.H2>
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
                                onChange={(event) => setEstadoCivil (event.target.value)}
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
                                onChange={(event) => setSexo (event.target.value)}
                                name="sexo">
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                                <option value="nao-se-aplica">Não se aplica</option>
                                <option value="prefiro-nao-dizer">Prefiro não dizer</option>
                            </S.SelectBox>
                        </S.RowMin>
                    </S.FormRow>

                    <S.FormRow>
                        <S.RowLarge>
                            <S.Input 
                                placeholder="Endereço" 
                                value={endereco}
                                onChange={(event) => setEndereco (event.target.value)}
                                required 
                            />
                        </S.RowLarge>
                    </S.FormRow>
                    
                    <S.FormRow>
                        <S.RowMedium>
                            <S.Input 
                                placeholder="Bairro" 
                                value={bairro}
                                onChange={(event) => setBairro (event.target.value)}
                                required 
                            />
                    </S.RowMedium>
                        <S.RowMedium>
                            <S.Input 
                                placeholder="Cidade"
                                value={cidade} 
                                onChange={(event) => setCidade (event.target.value)}
                                required 
                            />
                        </S.RowMedium>
                    </S.FormRow>

                    <S.FormRow>
                        <S.RowMedium>
                            <S.Input placeholder="CEP" required />
                    </S.RowMedium>
                        <S.RowMedium>
                            <S.Input 
                                placeholder="Cargo pretendido" 
                                value={cargoPretendido}
                                onChange={(event) => setCargoPretendido (event.target.value)}
                                required 
                            />
                        </S.RowMedium>
                    </S.FormRow>

                </S.PersonalData>

                <S.Documents>
                    <S.H2>DOCUMENTOS</S.H2>
                    <S.FormRow>
                        <S.RowMedium>
                            <S.Input 
                                placeholder="Identidade" 
                                value={identidade}
                                onChange={(event) => setIdentidade (event.target.value)}
                                required 
                            />
                        </S.RowMedium>
                        <S.RowMedium>
                            <S.Input placeholder="CPF" required onChange={(event) => callValidateCPF(event.target.value)} />
                            {!resultCpfValidation && <S.InvalidCPF>*ops!! CPF invalido</S.InvalidCPF>}
                        </S.RowMedium>
                    </S.FormRow>

                    <S.FormRow>
                        <S.RowMin>
                            <S.Label>Possui habilitação?</S.Label>
                            <S.SelectBox 
                                value={habilitacao}
                                onChange={(event) => setHabilitacao (event.target.value)}
                                name="habilitacao">
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </S.SelectBox>
                        </S.RowMin>
                        <S.RowMin>
                            <S.Label>Possui carro próprio?</S.Label>
                            <S.SelectBox 
                                value={carroProprio}
                                onChange={(event) => setCarroProprio (event.target.value)}
                                name="carro">
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </S.SelectBox>
                        </S.RowMin>
                    </S.FormRow>
                </S.Documents>

                <S.RowLarge>
                    <S.Button >Enviar!</S.Button>
                </S.RowLarge>

        </S.Container>
    )
}

export default ContactForm;