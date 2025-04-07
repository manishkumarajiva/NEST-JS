import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Color } from 'colors';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule,{logger : false});

    /** @Config Services */
    const configService = app.get(ConfigService);
    const port  = configService.get('app.port');
  
        
    
    /** @Swagger Setup */
    const SwaggerConfig = new DocumentBuilder()
    .setTitle('NEST JS')
    .setDescription('NEST CRUD AND AUTH')
    .setVersion('1.0.0')
    .build();

    const SwaggerDocument = SwaggerModule.createDocument(app, SwaggerConfig);
    SwaggerModule.setup('/api-docs', app, SwaggerDocument);

    /** @Set_Prefix */
    app.setGlobalPrefix('/api/v1')
    
    await app.listen(port);
    console.log(`SERVER LISTENING ON PORT ${port}`.rainbow);
    
  } catch (error) {
    console.log('ERROR DURING START SERVER ')
  }
}

bootstrap();
