import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { RequestResponse } from 'src/common/res/response.interface';
import { User } from './entities/user.entity';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create New User' })
  @ApiOkResponse({ description : 'Successfully Created' })
  @ApiBadRequestResponse({ description: 'Bad Request'})
  async create(@Body() createUserDto: CreateUserDto) : Promise<RequestResponse<User>> {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get All Users' })
  @ApiOkResponse({ description : 'Successfully Fetched' })
  @ApiBadRequestResponse({ description: 'Bad Request'})
  @ApiNotFoundResponse({ description: 'Empty Records'})
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Specific User' })
  @ApiOkResponse({ description : 'Successfully Fetched' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiNotFoundResponse({ description: 'User Not Found' })
  async findOne(@Param('id') id: string ) : Promise<RequestResponse<User>> {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update User Password' })
  @ApiOkResponse({ description : 'Successfully Updated' })
  @ApiBadRequestResponse({ description: 'Bad Request'})
  @ApiNotFoundResponse({ description: 'User Not Found' })
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) : Promise<RequestResponse<User>> {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete User' })
  @ApiOkResponse({ description : 'Successfully Deleted' })
  @ApiBadRequestResponse({ description: 'Bad Request'})
  @ApiNotFoundResponse({ description: 'User Not Found' })
  async remove(@Param('id') id: string) : Promise<any> {
    return this.usersService.remove(+id);
  }
}
