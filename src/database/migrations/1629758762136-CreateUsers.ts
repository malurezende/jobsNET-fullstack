import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1629758762136 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name:'users',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'birthday',
                        type: 'varchar'
                    },
                    {
                        name: 'mobile_phone',
                        type: 'varchar'
                    },
                    {
                        name: 'email',
                        type: 'varchar'
                    },
                    {
                        name: 'profession',
                        type: 'varchar'
                    },
                    {
                        name: 'marital_status',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'gender',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'cpf',
                        type: 'varchar',
                    },
                    {
                        name: 'rg',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'phone_number_one',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'phone_number_two',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'desabilities',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
