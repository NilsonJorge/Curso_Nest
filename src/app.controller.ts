import { Body, Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreatePessoaBody } from './dtos/create-pessoa-body';

@Controller('app')
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get('hello')
  async getHello(@Body() body: CreatePessoaBody) {
    const {name, function: memberFunction} = body
    const member = await this.prisma.pessoa.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction,
      },
    });
    return {
      member,
    };
  }
}
