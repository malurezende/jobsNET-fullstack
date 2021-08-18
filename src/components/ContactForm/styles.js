import styled from 'styled-components';
import DatePicker from 'react-date-picker';

export const Container = styled.div`
    width: 50%;
    margin: 0 auto;
    padding: 50px;
`;

export const H2 = styled.h2`
    margin: 0 0 20px 10px; 
`;

export const Label = styled.label`
    color: grey; 
    size: 09px; 
`;

export const RowLarge = styled.div`
    width: 100%;
    margin: 0 10px;
`;

export const RowMedium = styled.div`
    width: 50%;
    margin: 0 10px;
`;

export const RowMin = styled.div`
    width: 33.33%;
    margin: 0 10px;
 `;

export const PersonalData = styled.div`
    width: 100%;
`;

    export const FormRow = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 30px;
`;


export const Input = styled.input`
    width: 100%;
    padding: 10px;  
`;

export const SelectBox = styled.select`
    width: 100%;
    padding: 10px;
`;

export const BirthdayPicker = styled(DatePicker)`
    width: 100%;
    height: 39px;
`;

export const Documents = styled.div`
    margin: 10px;
`;

export const InvalidCPF = styled.p`
    color: red;
    font-size: 12px; 
`;

export const Button = styled.button`
    padding: 10px; 
    background-color: #42924c; 
    border: none;
    border-radius: 5px; 
    align-items: center;
    cursor: pointer;
    width: 98%;
`;





