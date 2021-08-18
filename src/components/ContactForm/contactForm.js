import React, { useState } from 'react';
import * as S from './styles';
import validation from '../../helpers/validateCPF';

const ContactForm = () => {
    const [birthday, setBirthday] = useState(new Date());
    const [resultCpfValidation, setResultCpfValidation] = useState(true);
    const [fullName, setFullName] = useState("");
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
                            <S.Input placeholder="Email" required/>
                        </S.RowMedium>
                        <S.RowMedium>
                            <S.Input placeholder="Celular" required />
                        </S.RowMedium>  
                    </S.FormRow>

                    <S.FormRow>
                        <S.RowMin>
                            <S.Label>Data de nascimento</S.Label>
                            <S.BirthdayPicker
                                onChange={setBirthday}
                                value={birthday}
                                format="dd/MM/y"
                            />

                        </S.RowMin>
                        <S.RowMin>
                            <S.Label>Estado civil</S.Label>
                            <S.SelectBox name="estado-civil">
                                <option value="solteiro">Solteiro</option>
                                <option value="casado">Casado</option>
                                <option value="viuvo">Viúvo</option>
                                <option value="viuvo">Separado</option>
                            </S.SelectBox>
                        </S.RowMin>
                        <S.RowMin>
                            <S.Label>Sexo</S.Label>
                            <S.SelectBox name="sexo">
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                                <option value="nao-se-aplica">Não se aplica</option>
                                <option value="prefiro-nao-dizer">Prefiro não dizer</option>
                            </S.SelectBox>
                        </S.RowMin>
                    </S.FormRow>

                    <S.FormRow>
                        <S.RowLarge>
                            <S.Input placeholder="Endereço" required />
                        </S.RowLarge>
                    </S.FormRow>
                    
                    <S.FormRow>
                        <S.RowMedium>
                            <S.Input placeholder="Bairro" required />
                    </S.RowMedium>
                        <S.RowMedium>
                            <S.Input placeholder="Cidade" required />
                        </S.RowMedium>
                    </S.FormRow>

                    <S.FormRow>
                        <S.RowMedium>
                            <S.Input placeholder="CEP" required />
                    </S.RowMedium>
                        <S.RowMedium>
                            <S.Input placeholder="Cargo pretendido" required />
                        </S.RowMedium>
                    </S.FormRow>

                </S.PersonalData>

                <S.Documents>
                    <S.H2>DOCUMENTOS</S.H2>
                    <S.FormRow>
                        <S.RowMedium>
                            <S.Input placeholder="Identidade" required />
                        </S.RowMedium>
                        <S.RowMedium>
                            <S.Input placeholder="CPF" required onChange={(event) => callValidateCPF(event.target.value)} />
                            {!resultCpfValidation && <p>CPF Invalido</p>}
                        </S.RowMedium>
                    </S.FormRow>

                    <S.FormRow>
                        <S.RowMin>
                            <S.Label>Possui habilitação?</S.Label>
                            <S.SelectBox name="habilitacao">
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </S.SelectBox>
                        </S.RowMin>
                        <S.RowMin>
                            <S.Label>Possui carro próprio?</S.Label>
                            <S.SelectBox name="carro">
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