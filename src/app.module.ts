import { Module, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsuariosModule } from './usuarios/usuarios.module';
import { Connection } from 'typeorm';
import { UsuariosController } from './usuarios/controllers/usuarios.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsuariosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
