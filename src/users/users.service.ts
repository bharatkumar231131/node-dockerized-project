import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ){}

    async create(createUserDto: CreateUserDto): Promise<User>{
        return this.userModel.create(createUserDto as User);
    }

    async findAll(): Promise<User[]> {
        return this.userModel.findAll();
    }

    async findOne(id: number): Promise<User> {
        const user = await this.userModel.findByPk(id);
        if(!user){
            throw new NotFoundException(`User with Id ${id} not found`);
        }
        return user;
    }

    async update(id: number, updateUserDto: UpdateUserDto): Promise<User>{
        const user = await this.findOne(id);
        return user.update(updateUserDto);
    }

    async remove(id: number): Promise<void> {
        const user = await this.findOne(id);
        await user.destroy();
    }
}
