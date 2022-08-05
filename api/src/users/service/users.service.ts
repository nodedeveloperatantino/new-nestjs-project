/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable, switchMap, map, catchError, throwError } from 'rxjs';
import { AccountEntity } from 'src/accounts/entities/account.entity';
import { AuthService } from 'src/auth/services/auth.service';
import { OperationEntity } from 'src/operation/models/operation.entity';
import { OperationType } from 'src/operation/models/operation.interface';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../models/user.entity';
import { User } from '../models/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    
    @InjectRepository(AccountEntity)
    private readonly accountRepository: Repository<AccountEntity>,

    @InjectRepository(OperationEntity)
    private readonly operationRepository: Repository<OperationEntity>,
    private authService: AuthService,
  ) {}

  create(createUserDto: CreateUserDto): Observable<User> {
    // return from(this.userRepository.save(createUserDto));

    return this.authService.hashPassword(createUserDto.password).pipe(
      switchMap((passwordHash: string) => {
        const newUser = new UserEntity();
        newUser.name = createUserDto.fullName;
        newUser.username = createUserDto.username;
        newUser.email = createUserDto.email;
        newUser.password = passwordHash;
        newUser.role = createUserDto.role;

        const newAccount = new AccountEntity();
        newAccount.firstName = createUserDto.fullName.split(' ')[0];
        newAccount.lastName = createUserDto.fullName.split(' ')[1];
        newAccount.emailId = createUserDto.email;
        newAccount.phoneNumber = createUserDto.phoneNumber;

        const newOperation = new OperationEntity();
        newOperation.operationType = OperationType.CAC;

        newUser.account = newAccount;

        newOperation.account = newAccount;

        const createAccount = from(this.accountRepository.save(newAccount));
        const createOperation = from(this.operationRepository.save(newOperation));

        const createUser = from(this.userRepository.save(newUser)).pipe(
          map((user: User) => {
            const { password, ...result } = user;
            return result;
          }),
          catchError((err) => throwError(err)),
        );

        return createUser;
      }),
    );
  }

  findAll(): Observable<User[]> {
    return from(this.userRepository.find()).pipe(
      map((users: User[]) => {
        users.forEach(function (v) {
          delete v.password;
        });
        return users;
      }),
    );
    // return from(this.userRepository.find());
  }

  findOne(id: string): Observable<User> {
    return from(this.userRepository.findOne({ where: { id } })).pipe(
      map((user: User) => {
        const { password, ...result } = user;
        return result;
      }),
    );
  }

  update(id: string, updateUserDto: UpdateUserDto): Observable<any> {
    return from(this.userRepository.update(id, updateUserDto));
  }

  updateOne(id: string, User: CreateUserDto): Observable<any> {
    delete User.email;
    delete User.password;
    return from(this.userRepository.update(id, User));
  }

  remove(id: string): Observable<any> {
    return from(this.userRepository.delete(id));
  }

  login(user: User): Observable<string> {
    return from(this.validateUser(user.email, user.password)).pipe(
      switchMap((user: User) => {
        if(user) {
          return this.authService.createJWT(user).pipe(map((jwt: string) => (jwt)));
        } else {
          return 'Wrong Credentials';
        }
      })
    )
  }

  validateUser(email: string, password: string): Observable<User> {
    return this.findByMail(email).pipe(
      switchMap((user: User) =>
        this.authService.comparePasswordHash(password, user.password).pipe(
          map((match: boolean) => {
            if (match) {
              const { password, ...result } = user;
              return result;
            } else {
              throw Error;
            }
          }),
        ),
      ),
    );
  }

  findByMail(email: string): Observable<User> {
    return from(this.userRepository.findOne({ where: { email } }));
  }

  updateRoleOfUser(id: string, user: User): Observable<any> {
    return from(this.userRepository.update(id, user))
  }
}
