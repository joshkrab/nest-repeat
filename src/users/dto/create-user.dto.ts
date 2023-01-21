import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';

export class CreateUserDto {
  @ApiProperty({
    example: 'josh@gmail.com',
    description: 'Email address',
  })
  readonly email: string;

  @ApiProperty({
    example: '1234rrt',
    description: 'User password',
  })
  readonly password: string;
}
