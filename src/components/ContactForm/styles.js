import styled from 'styled-components';
import DatePicker from 'react-date-picker';

export const Container = styled.form`
    width: 50%;
    margin: 0 auto;
    padding: 50px;
    border-radius: 5px; 
    background-color: #fefefe; 
`;

export const H2 = styled.h2`
    margin: 0 0 5px 10px; 
`;

export const H3 = styled.h3`
    margin: 0 0 25px 10px;
    font-size: 15px;
    color: gray;
    font-style: italic;
`;

export const Label = styled.label`
    color: gray; 
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
`;

export const InputError = styled.p`
    color: red;
    font-size: 12px;
    position: absolute;
    margin-top: 5px; 
`;

export const Button = styled.input`
    padding: 15px; 
    background-color: #04d361; 
    font-size: 18px;
    border: none;
    border-radius: 5px; 
    align-items: center;
    cursor: pointer;
    width: 98%;
    color: white;
    font-weight: bold;
`;





