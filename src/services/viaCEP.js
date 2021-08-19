
import axios from "axios"; 

const getAddressViaCep = async(cep) => {
    const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(response => {
        return response.data;
    });
    return res;
}

export default getAddressViaCep;