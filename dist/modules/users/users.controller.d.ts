import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RequestResponse } from 'src/common/res/response.interface';
import { User } from './entities/user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<RequestResponse<User>>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<RequestResponse<User>>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<RequestResponse<User>>;
    remove(id: string): Promise<RequestResponse<User>>;
}
