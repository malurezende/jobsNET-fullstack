import { getRepository } from "typeorm";
import User from "../models/User";

interface Request {
    name: string;
    birthday: string;
    mobile_phone: string;
    email: string;
    profession: string;
    marital_status?: string;
    gender?: string;
    cpf: string;
    rg: string;
    desabilities?: boolean;
    driver_license?: boolean;
    car?: boolean;
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    cep: string;
}

class CreateUserService {
    public async execute({
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
    }: Request): Promise<User> {
        const usersRepository = getRepository(User);

        const checkUserExists = await usersRepository.findOne({
            where: { cpf }
        })

        if (checkUserExists) {
            throw new Error('CPF already used');
        }

        const user = usersRepository.create({
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

        await usersRepository.save(user);

        return user;

    }
}

export default CreateUserService;