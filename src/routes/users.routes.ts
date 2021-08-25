import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

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

export default usersRouter;