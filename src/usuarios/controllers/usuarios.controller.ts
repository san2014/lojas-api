import {
    Controller, Post, Get, Body
}
from "@nestjs/common";
import { UsuariosService } from './../services/usuarios.service';
import { UsuarioEntity } from './../entities/usuarios.entity';
import { UsuarioModel } from "../models/usuario.model";
import { LoginModel } from "../models/login.model";

@Controller('v1/usuarios') 
export class UsuariosController {

    constructor(private service: UsuariosService) {}

    @Post() async create(@Body() entity: UsuarioEntity) {
        return this.service.createUsuario(entity);
    }

    @Get() async get(): Promise<UsuarioEntity[]> {
        return this.service.getUsuarios();
    }

    @Post('/login') async login(@Body() credenciais: LoginModel) {
        return this.service.login(credenciais);
    }
}
