import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({description: 'The first name of the user', example: 'chhavi'})
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @ApiProperty({description: 'The last name of the user',example: 'tanwar'})
    @IsString()
    @IsNotEmpty()
    lastName: string;

    @ApiProperty({description: 'The email of the user', example: 'user@example.com'})
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({description: 'The age of the user',example: '21'})
    @IsNotEmpty()
    age: number;

}