"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        const configService = app.get(config_1.ConfigService);
        const port = configService.get('app.port');
        const SwaggerConfig = new swagger_1.DocumentBuilder()
            .setTitle('NEST JS')
            .setDescription('NEST CRUD AND AUTH')
            .setVersion('1.0.0')
            .build();
        const SwaggerDocument = swagger_1.SwaggerModule.createDocument(app, SwaggerConfig);
        swagger_1.SwaggerModule.setup('api-docs', app, SwaggerDocument);
        await app.listen(port);
        console.log(`SERVER LISTENING ON PORT ${port}`);
    }
    catch (error) {
        console.log('ERROR DURING START SERVER ');
    }
}
bootstrap();
//# sourceMappingURL=main.js.map