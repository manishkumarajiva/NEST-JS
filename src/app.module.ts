import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./modules/auth/auth.module";
import { UsersModule } from "./modules/users/users.module";
import { ConfigurationModule } from "./modules/configuration/configuration.module";
import { DatabaseModule } from "./modules/configuration/database.module";


@Module( {
  imports: [
    ConfigurationModule,
    DatabaseModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
} )
export class AppModule { }
