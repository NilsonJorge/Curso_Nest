import { Body, Controller, Get, Post } from '@nestjs/common';
// import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreatePessoaBody } from './dtos/create-pessoa-body';
import { PessoaRepository } from './repositories/pessoa-repository';

@Controller('app')
export class AppController {
  constructor(private pessoaRepository: PessoaRepository) {}

  @Post('hello')
  async getHello(@Body() body: CreatePessoaBody) {
    const { name, function: memberFunction } = body;

    await this.pessoaRepository.create(name, memberFunction);
  }
}
