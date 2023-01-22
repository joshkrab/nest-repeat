import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'josh@gmail.com',
    description: 'Email address',
  })
  @IsString({ message: 'Must be a string' })
  @IsEmail({}, { message: 'Incorrct email' })
  readonly email: string;

  @ApiProperty({
    example: '1234rrt',
    description: 'User password',
  })
  @IsString({ message: 'Must be a string' })
  @Length(4, 16, { message: 'Min 4, Max 16' })
  readonly password: string;
}
