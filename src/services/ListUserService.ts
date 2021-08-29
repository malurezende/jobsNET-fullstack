import { getRepository } from "typeorm";
import User from "../models/User";

class ListUserService {
    public async execute(cpf: any): Promise<User> {
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne({
            where: { cpf }
        })

        if (!user) {
            throw new Error('CPF not found');
        }

        return user;
    }
}

export default ListUserService;