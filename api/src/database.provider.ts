/* eslint-disable prettier/prettier */
import { DataSource } from "typeorm";

export const databaseProvider = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'ravi1234',
                database: 'nestjs-blog',
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: true
            })

            return dataSource.initialize();
        }
    }
]