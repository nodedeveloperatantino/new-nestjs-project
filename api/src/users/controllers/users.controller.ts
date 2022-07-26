import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { catchError, map, Observable, of } from 'rxjs';
import { User } from '../models/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Observable<User | Object> {
    return this.usersService.create(createUserDto).pipe(
      map((user: User) => user), catchError(err => of({error: err.message}))
    )
  }

  @Post('login')
  login(@Body() user: User): Observable<Object> {
    return this.usersService.login(user).pipe(
      map((jwt: string) => ({accessToken: jwt}))
    )
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<User> {
    return this.usersService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Put(':id')
  updateOne(@Param('id')id:string, @Body() User: CreateUserDto): Observable<any> {
    return this.usersService.updateOne(Number(id), User);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Observable<User>{
    return this.usersService.remove(+id);
  }
}
