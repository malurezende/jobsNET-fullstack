import styled from 'styled-components';
import DatePicker from 'react-date-picker';

export const Container = styled.div`
    width: 50%;
    margin: 0 auto;
`;

export const RowMedium = styled.div`
    width: 50%;
`;

export const RowMin = styled.div`
    width: 33.33%;
`;

export const PersonalData = styled.div`
    width: 100%;
`;

export const FormRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const Input = styled.input`
    width: 90%;
    padding: 10px;
`;

export const SelectBox = styled.select`
    width: 90%;
    padding: 10px;
`;

export const BirthdayPicker = styled(DatePicker)`
    width: 90%;
`;

export const Documents = styled.div`
    
`;


