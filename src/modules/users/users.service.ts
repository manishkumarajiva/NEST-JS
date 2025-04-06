import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { RequestResponse } from 'src/common/res/response.interface';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ){}

  async create(createUserDto: CreateUserDto) : Promise<any> {
    try {
      const createResponse: User = await this.userRepository.create(createUserDto);
      const user: User = await this.userRepository.save(createResponse);

      if(!user){
        const response: RequestResponse<any> = {
          status: HttpStatus.BAD_REQUEST, success: false,
          message: 'Failed To Create', data: null
        }
        return response;
      }

      const response: RequestResponse<User> = {
        status: HttpStatus.CREATED,
        success: true,
        message: 'Successfully Created', data: user
      }
    } catch (error) {
      
    } 
  }

  async findAll(): Promise<any> {
    try {
      const users: User[] = await this.userRepository.find();

      if(!users.length) {
        const response: RequestResponse<[]> = {
          status: HttpStatus.NOT_FOUND,
          success: false,
          message: 'Empty Records',
          data: []
        }
        return response;
      }

      const response: RequestResponse<User[]> = {
        status: HttpStatus.OK,
        success: true,
        message: 'Successfully Fetched',
        data: users
      }

      return response;

    } catch (error) {
      
    };
  }

  async findOne(id: number) {
    try {
      const user: User | null = await this.userRepository.findOneBy({
        id: id
      });

      if(!user) {
        const response: RequestResponse<{}> = {
          status: HttpStatus.NOT_FOUND,
          success: false,
          message: 'Empty Records',
          data: {}
        }
        return response;
      }

      const response: RequestResponse<User> = {
        status: HttpStatus.OK,
        success: true,
        message: 'Successfully Fetched',
        data: user
      }

      return response;

    } catch (error) {
      
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const user : User | null = await this.userRepository.findOneBy({
        id: id
      });

      if(!user) {
        const response: RequestResponse<{}> = {
          status: HttpStatus.NOT_FOUND,
          success: false,
          message: 'User Not Found',
          data: {}
        }
        return response;
      }

      const updatePayload = {...user, ...updateUserDto};
      const updateResponse: User = await this.userRepository.save(updatePayload);

      const response: RequestResponse<User> = {
        status: HttpStatus.ACCEPTED,
        success: true,
        message: 'Successfull Updated',
        data: updateResponse
      }
      return response;
      
    } catch (error) {
      
    }
  }

  async remove(id: number) {
    try {
      const user : User | null = await this.userRepository.findOneBy({
        id: id
      });

      if(!user) {
        const response: RequestResponse<{}> = {
          status: HttpStatus.NOT_FOUND,
          success: false,
          message: 'User Not Found',
          data: {}
        }
        return response;
      }

      await this.userRepository.delete(id);

      const response: RequestResponse<User> = {
        status: HttpStatus.OK,
        success: true,
        message: 'Successfull Deleted',
        data: user
      }
      return response;


    } catch (error) {
      
    }
  }
}
