import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('User_integration_tbl')
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullname: string;

    @Column()
    email: string;

    @Column()
    password: string;
}