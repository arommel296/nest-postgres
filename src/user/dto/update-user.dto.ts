// import { PartialType } from '@nestjs/mapped-types';
// import { CreateUserDto } from './create-user.dto';

// export class UpdateUserDto extends PartialType(CreateUserDto) {

// }

import { IsNotEmpty, IsEmail, Matches, IsOptional, MinLength, IsAlphanumeric } from 'class-validator';

const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,50}$/;
const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export class UpdateUserDto {
    @IsOptional()
    @MinLength(3, { message: 'Username must have atleast 3 characters.' })
    @IsAlphanumeric(null, {
        message: 'Username does not allow other than alpha numeric chars.',
    })
    username?: string;

    @IsOptional()
    @IsEmail(null, { message: 'Please provide valid Email.' })
    @Matches(emailRegEx, {message: 'Please provide valid Email.'})
    email?: string;

    @IsOptional()
    @Matches(passwordRegEx, {
        message: `Password must contain Minimum 8 and maximum 50 characters, 
        at least one uppercase letter, 
        one lowercase letter, 
        one number and 
        one special character`,
    })
    password?: string;
}

