import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateUserDto {

    @IsString()
    @MaxLength(6)
    @IsOptional()
    @ApiProperty({ description: 'Username' })
    username: string;

    @IsString()
    @IsOptional()
    @MaxLength(6)
    @ApiProperty({ description: 'Password' })
    password: string;

    @IsString()
    role: string = 'user';
}

