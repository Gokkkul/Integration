import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('User_integration_tbl')
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    fullname: string;

    @Column({nullable:true})
    email: string;

    @Column({nullable:true})
    password: string;
}
