import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioEntity } from './../entities/usuarios.entity';

@Injectable()
export class UsuariosService {

    constructor(@InjectRepository(UsuarioEntity) private usuariosRepository: Repository<UsuarioEntity>) { }

    async createUsuario(usuario: UsuarioEntity): Promise<UsuarioEntity> {
        return await this.usuariosRepository.save(usuario);
    }

    async getUsuarios(): Promise<UsuarioEntity[]> {
        const users = await this.usuariosRepository.find();
        console.log(users);
        return users;
    }

}