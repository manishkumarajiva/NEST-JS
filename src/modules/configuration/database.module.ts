import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";


@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService): Promise<any> => ({
                type: configService.get<string>('db.dialect'),
                host: configService.get<string>('db.host'),
                port: configService.get<number>('db.port'),
                username: configService.get<string>('db.username'),
                password: configService.get<string>('db.password'),
                database: configService.get<string>('db.database'),
                entities: ['dist/**/*.entity{.ts,.js}'],
                synchronize: true
            })
        })
    ]
})
export class DatabaseModule {}