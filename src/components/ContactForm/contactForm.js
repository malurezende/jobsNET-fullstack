import React, { useState } from 'react';
import * as S from './styles';

const ContactForm = () => {
    const [value, onChange] = useState(new Date());

    return (
        <S.Container>
            <S.PersonalData>
                <h2>DADOS PESSOAIS</h2>
                <S.FormRow>
                    <S.RowMedium>
                        <S.Input placeholder="Nome Completo" required />
                    </S.RowMedium>
                    <S.RowMedium>
                        <S.Input placeholder="Cargo Pretendido" />
                    </S.RowMedium>
                </S.FormRow>

                <S.FormRow>
                    <S.RowMin>
                        <S.BirthdayPicker
                            onChange={onChange}
                            value={value}
                            format="dd/MM/y"
                        />
                    </S.RowMin>
                    <S.RowMin>
                        <S.SelectBox name="estado-civil">
                            <option value="solteiro">Solteiro</option>
                            <option value="casado">Casado</option>
                            <option value="viuvo">Viúvo</option>
                        </S.SelectBox>
                    </S.RowMin>
                    <S.RowMin>
                        <S.SelectBox name="cars">
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="nao-se-aplica">Não se aplica</option>
                            <option value="prefiro-nao-dizer">Prefiro não dizer</option>
                        </S.SelectBox>
                    </S.RowMin>
                </S.FormRow>
            </S.PersonalData>

            <S.Documents>

            </S.Documents>
        </S.Container>
    )
}

export default ContactForm;