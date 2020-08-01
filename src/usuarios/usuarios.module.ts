import { UsuariosService } from './services/usuarios.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosController } from './controllers/usuarios.controller';
import { UsuarioEntity } from './entities/usuarios.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioEntity])],
    exports: [TypeOrmModule],
    providers: [UsuariosService],
    controllers: [UsuariosController],
})
export class UsuariosModule {}
