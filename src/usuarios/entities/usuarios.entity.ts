import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario')
export class UsuarioEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    login: string;

    @Column()
    senha: string;

    @Column({default: true})
    ativo: boolean;

}