import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';


@Module({
  controllers: [AuthController],
  imports: [JwtModule.registerAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (ConfigService: ConfigService) => ({
      secret: ConfigService.get('JWT_SECRET'),
      signOptions: {
        expiresIn: '360s'
      }
    })
  })],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
