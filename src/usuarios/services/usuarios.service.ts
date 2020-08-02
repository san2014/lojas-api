import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioEntity } from './../entities/usuarios.entity';
import { LoginModel } from '../models/login.model';

@Injectable()
export class UsuariosService {

    constructor(@InjectRepository(UsuarioEntity) private usuariosRepository: Repository<UsuarioEntity>) { }

    async createUsuario(usuario: UsuarioEntity): Promise<UsuarioEntity> {
        return await this.usuariosRepository.save(usuario);
    }

    async getUsuarios(): Promise<UsuarioEntity[]> {
        const users = await this.usuariosRepository.find();
        return users;
    }

    async login(credenciais: LoginModel) {
        const user = await this.usuariosRepository.findOne({
            where: {
                login: credenciais.login,
                senha: credenciais.senha,
                ativo: true
            }
        })
        if (user) {
            user.senha = '';
        } else {
            throw Error('Credenciais inválidas');
        }
        return user;
    }

}