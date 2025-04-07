import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, DeleteDateColumn } from 'typeorm';
import { IsDate, IsString, IsStrongPassword, } from 'class-validator';


enum UserRole {
    USER = 'user',
    ADMIN = 'admin',
    GUEST = 'guest'
}

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ type: 'varchar', length: 200 })
    @IsString()
    username: string;

    @Column({ type: 'varchar', length: 200})
    @IsStrongPassword()
    password: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.USER
    })
    @IsString()
    role: string;

    @UpdateDateColumn()
    @IsDate()
    updatedAt: Date;

    @CreateDateColumn()
    @IsDate()
    createdAt: Date;

    @DeleteDateColumn()
    @IsDate()
    deletedAt: Date
}

export default User;
