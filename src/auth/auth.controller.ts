import { Body, Controller, Get, NotFoundException, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
// import { Request } from 'express';
import * as passport from 'passport';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Body() body) {
        let email = body.email;
        let password = body.password;
        let user = this.authService.validateUser(email, password);
        console.log();
        if (!user) {
            // return this.authService.login(user);
            throw new NotFoundException('User not found');
        }
        return this.authService.signIn(email, password);
    }

    // @Post('register')
    // async register(@Request() req) {
    //     return this.authService.register(req);
    // }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
