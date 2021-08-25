import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column('timestamp with time zone')
    birthday: Date;
    
    @Column()
    mobile_phone: string;

    @Column()
    email: string;

    @Column()
    profession: string;

    @Column()
    marital_status: string;

    @Column()
    gender: string;

    @Column()
    cpf: string;
    
    @Column()
    rg: string;

    @Column()
    desabilities: boolean;

    @Column()
    driver_license: boolean;

    @Column()
    car: boolean;

    @Column()
    street: string;

    @Column()
    number: number;

    @Column()
    neighborhood: string;

    @Column()
    city: string;

    @Column()
    cep: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default User;