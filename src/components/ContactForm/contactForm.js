import React, { useState, useCallback } from 'react';
import * as S from './styles';
import validation from '../../helpers/validateCPF';
import getAddressViaCep from '../../services/viaCEP';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

const ContactForm = () => {
    const [resultCpfValidation, setResultCpfValidation] = useState(true);
    const [fullName, setFullName] = useState("");
    const [personalEmail, setPersonalEmail] = useState ("");
    const [celNumber, setCelNumber] = useState("");
    const [birthday, setBirthday] = useState("");
    const [estadoCivil, setEstadoCivil] = useState(""); 
    const [gender, setGender] = useState(""); 
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [cep, setCep] = useState("");
    const [cargoPretendido, setCargoPretendido] = useState(""); 
    const [identidade, setIdentidade] = useState(""); 
    const [cpf, setCPF] = useState("");
    const [habilitacao, setHabilitacao] = useState(false); 
    const [carroProprio, setCarroProprio] = useState(false); 
    const [vagaPCD, setVagaPCD] = useState(false);
    const [formErrorsState, setFormErrorsState] = useState({});

    const handleContactForm = useCallback(async (contactFormObject) => {
        try {   
          setFormErrorsState({});

          const schema = Yup.object().shape({
            name: Yup.string().required('* Campo obrigatório'),
            birthday: Yup.string().required('* Campo obrigatório'),
            mobile_phone: Yup.string().required('* Campo obrigatório'),
            email: Yup.string().required('* Campo obrigatório'),
            profession: Yup.string(),
            marital_status: Yup.string(),
            gender: Yup.string(),
            cpf: Yup.string().required('* Campo obrigatório'),
            rg: Yup.string().required('* Campo obrigatório'),
            street: Yup.string().required('* Campo obrigatório'),
            number: Yup.string().required('* Campo obrigatório'),
            neighborhood: Yup.string().required('* Campo obrigatório'),
            city: Yup.string().required('* Campo obrigatório'),
            cep: Yup.string().required('* Campo obrigatório'),
            desabilities: Yup.boolean(),
            driver_license: Yup.boolean(),
            car: Yup.boolean(),
          });
    
          await schema.validate(contactFormObject, {
            abortEarly: false,
          });

          saveContactForm(contactFormObject);
        } catch (err) {
          if (err instanceof Yup.ValidationError) {
            const errors = getValidationErrors(err);
            setFormErrorsState(errors);
            return;
          }
        }
      }, []);

    const saveContactForm = (contactFormObject) => {
        api
        .post("/users", contactFormObject)
        .then((response) => {
            window.alert('Seus dados foram cadastrados com sucesso');
            clearForm();
        })
        .catch((err) => {
            if ('Error: Request failed with status code 400') {
                window.alert('CPF ja cadastrado')
            }
        });
    }

    const clearForm = () => {
        setFullName('');
        setPersonalEmail('');
        setCelNumber('');
        setBirthday('');
        setEstadoCivil('');
        setGender('');
        setEndereco('');
        setNumero('');
        setBairro('');
        setCidade('');
        setCep('');
        setCargoPretendido('');
        setIdentidade('');
        setCPF('');
        setHabilitacao(false);
        setCarroProprio(false);
        setVagaPCD(false);
    }

    const handleSearchCep = async () => {
        const address = await getAddressViaCep(cep);
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
        
        const contactFormObject = {
            name: fullName,
            birthday,
            mobile_phone: celNumber,
            email: personalEmail,
            profession: cargoPretendido,
            marital_status: estadoCivil,
            gender: gender,
            cpf,
            rg: identidade,
            street: endereco,
            number: numero,
            neighborhood: bairro,
            city: cidade,
            cep,
            desabilities: vagaPCD,
            driver_license: habilitacao,
            car: carroProprio,
        }

        handleContactForm(contactFormObject);
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
                            {formErrorsState.name && (
                                <S.InputError>{formErrorsState.name}</S.InputError>
                            )}
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
                            {formErrorsState.birthday && (
                                <S.InputError>{formErrorsState.birthday}</S.InputError>
                            )}
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
                            <S.Label>Gênero</S.Label>
                            <S.SelectBox 
                                value={gender}
                                onChange={(event) => setGender(event.target.value)}
                                name="gender">
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
                                onChange={(event) => setPersonalEmail(event.target.value)}
                                required
                            />
                            {formErrorsState.email && (
                                <S.InputError>{formErrorsState.email}</S.InputError>
                            )}
                        </S.RowMedium>
                        <S.RowMedium>
                            <S.Input 
                                placeholder="Celular"
                                value={celNumber}
                                onChange={(event) => setCelNumber(event.target.value)} 
                                required 
                            />
                            {formErrorsState.mobile_phone && (
                                <S.InputError>{formErrorsState.mobile_phone}</S.InputError>
                            )}
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
                            {formErrorsState.street && (
                                <S.InputError>{formErrorsState.street}</S.InputError>
                            )}
                        </S.RowLarge>

                        <S.RowMedium>
                            <S.Input 
                                placeholder="Número" 
                                value={numero}
                                onChange={(event) => setNumero(event.target.value)}
                                required 
                            />
                            {formErrorsState.number && (
                                <S.InputError>{formErrorsState.name}</S.InputError>
                            )}
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
                            {formErrorsState.neighborhood && (
                                <S.InputError>{formErrorsState.neighborhood}</S.InputError>
                            )}
                    </S.RowMedium>
                        <S.RowMedium>
                            <S.Input 
                                placeholder="Cidade - Estado"
                                value={cidade} 
                                onChange={(event) => setCidade(event.target.value)}
                                required 
                            />
                            {formErrorsState.city && (
                                <S.InputError>{formErrorsState.city}</S.InputError>
                            )}
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
                            {formErrorsState.cep && (
                                <S.InputError>{formErrorsState.cep}</S.InputError>
                            )}
                    </S.RowMedium>
                        <S.RowMedium>
                            <S.Input 
                                placeholder="Cargo pretendido" 
                                value={cargoPretendido}
                                onChange={(event) => setCargoPretendido(event.target.value)}
                                required 
                            />
                            {formErrorsState.profession && (
                                <S.InputError>{formErrorsState.profession}</S.InputError>
                            )}
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
                                {formErrorsState.cpf && (
                                <S.InputError>{formErrorsState.cpf}</S.InputError>
                            )}
                            {(!resultCpfValidation && !formErrorsState.cpf) && <S.InputError>*ops!! CPF invalido</S.InputError>}
                        </S.RowMedium>
                    </S.FormRow>

                    <S.FormRow>
                        <S.RowMin>
                            <S.Label>Possui habilitação?</S.Label>
                            <S.SelectBox 
                                value={habilitacao}
                                onChange={(event) => setHabilitacao(event.target.value)}
                                name="habilitacao">
                                <option value={true}>Sim</option>
                                <option value={false}>Não</option>
                            </S.SelectBox>
                        </S.RowMin>
                        <S.RowMin>
                            <S.Label>Possui carro próprio?</S.Label>
                            <S.SelectBox 
                                value={carroProprio}
                                onChange={(event) => setCarroProprio(event.target.value)}
                                name="carro">
                                <option value={true}>Sim</option>
                                <option value={false}>Não</option>
                            </S.SelectBox>
                        </S.RowMin>
                        <S.RowMin>
                            <S.Label>Deseja concorrer a vaga PCD?</S.Label>
                            <S.SelectBox 
                                value={vagaPCD}
                                onChange={(event) => setVagaPCD(event.target.value)}
                                name="vagaPCD">
                                <option value={true}>Sim</option>
                                <option value={false}>Não</option>
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