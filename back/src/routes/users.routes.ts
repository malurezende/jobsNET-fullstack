import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';
import ListUserService from '../services/ListUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
    try {
        const { 
            name,
            birthday,
            mobile_phone,
            email,
            profession,
            marital_status,
            gender,
            cpf,
            rg,
            desabilities,
            driver_license,
            car,
            street,
            number,
            neighborhood,
            city,
            cep,
         } = request.body;

         const createUser = new CreateUserService();

         const user = await createUser.execute({
            name,
            birthday,
            mobile_phone,
            email,
            profession,
            marital_status,
            gender,
            cpf,
            rg,
            desabilities,
            driver_license,
            car,
            street,
            number,
            neighborhood,
            city,
            cep,
         });

         return response.json(user);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }   
})

usersRouter.get('/', async (request, response) => {
    try {
        const cpf  = request.query.cpf;

         const listUser = new ListUserService();

         const user = await listUser.execute(cpf);

         return response.json(user);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }

    
})

export default usersRouter;