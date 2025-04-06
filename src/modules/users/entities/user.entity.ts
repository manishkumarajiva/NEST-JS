import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsDate, IsString, IsStrongPassword, } from 'class-validator';


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    username: string;

    @Column()
    @IsStrongPassword()
    password: string;

    @Column()
    @IsString()
    role: string;

    @Column()
    @IsDate()
    updatedAt: Date;

    @Column()
    @IsDate()
    createdAt: Date;
}

export default User;
