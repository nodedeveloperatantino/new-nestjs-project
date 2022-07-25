import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../models/user.entity';
import { User } from '../models/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
  ){}

  create(createUserDto: CreateUserDto): Observable<User> {
    return from(this.userRepository.save(createUserDto));
  }

  findAll(): Observable<User[]> {
    return from(this.userRepository.find());
  }

  findOne(id: number):Observable<User> {
    return from(this.userRepository.findOne({where: {id: id}}));
  }

  update(id: number, updateUserDto: UpdateUserDto): Observable<any> {
    return from(this.userRepository.update(id, updateUserDto));
  }

  updateOne(id: number, User: CreateUserDto): Observable<any> {
    return from(this.userRepository.update(id, User));
  }

  remove(id: number):Observable<any> {
    return from(this.userRepository.delete(id));
  }
}
