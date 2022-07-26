import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { from, Observable, of } from 'rxjs';
import { User } from 'src/users/models/user.interface';

const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  
  constructor(private readonly jwtService: JwtService){}

  createJWT(payload: User): Observable <string> {
    return from(this.jwtService.signAsync({payload}));
  }

  hashPassword(password: string): Observable<string> {
    return from<string>(bcrypt.hash(password, 12));
  }

  comparePasswordHash(newPassword: string, passwordHash: string): Observable<any> {
    return of<any | boolean> (bcrypt.compare(newPassword, passwordHash));
  }
}
