"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createUserDto) {
        try {
            const createResponse = await this.userRepository.create(createUserDto);
            const user = await this.userRepository.save(createResponse);
            if (!user) {
                const response = {
                    status: common_1.HttpStatus.BAD_REQUEST,
                    success: false,
                    message: 'Failed To Create',
                    data: null
                };
                return response;
            }
            const response = {
                status: common_1.HttpStatus.CREATED,
                success: true,
                message: 'Successfully Created',
                data: user
            };
            return response;
        }
        catch (error) {
        }
    }
    ;
    async findAll() {
        try {
            const users = await this.userRepository.find();
            if (!users.length) {
                const response = {
                    status: common_1.HttpStatus.NOT_FOUND,
                    success: false,
                    message: 'Empty Records',
                    data: []
                };
                return response;
            }
            const response = {
                status: common_1.HttpStatus.OK,
                success: true,
                message: 'Successfully Fetched',
                data: users
            };
            return response;
        }
        catch (error) {
        }
        ;
    }
    ;
    async findOne(id) {
        try {
            const user = await this.userRepository.findOneBy({
                id: id
            });
            if (!user) {
                const response = {
                    status: common_1.HttpStatus.NOT_FOUND,
                    success: false,
                    message: 'Empty Records',
                    data: null
                };
                return response;
            }
            const response = {
                status: common_1.HttpStatus.OK,
                success: true,
                message: 'Successfully Fetched',
                data: user
            };
            return response;
        }
        catch (error) {
        }
    }
    async update(id, updateUserDto) {
        try {
            const user = await this.userRepository.findOneBy({
                id: id
            });
            if (!user) {
                const response = {
                    status: common_1.HttpStatus.NOT_FOUND,
                    success: false,
                    message: 'User Not Found',
                    data: null
                };
                return response;
            }
            const updatePayload = { ...user, ...updateUserDto };
            const updateResponse = await this.userRepository.save(updatePayload);
            const response = {
                status: common_1.HttpStatus.ACCEPTED,
                success: true,
                message: 'Successfull Updated',
                data: updateResponse
            };
            return response;
        }
        catch (error) {
        }
    }
    async remove(id) {
        try {
            const user = await this.userRepository.findOneBy({
                id: id
            });
            if (!user) {
                const response = {
                    status: common_1.HttpStatus.NOT_FOUND,
                    success: false,
                    message: 'User Not Found',
                    data: null
                };
                return response;
            }
            await this.userRepository.delete(id);
            const response = {
                status: common_1.HttpStatus.OK,
                success: true,
                message: 'Successfull Deleted',
                data: user
            };
            return response;
        }
        catch (error) {
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map