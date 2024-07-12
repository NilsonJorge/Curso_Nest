import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { PessoaRepository } from './repositories/pessoa-repository';
import { PrismaPessoaRepository } from './repositories/prisma/prisma-pessoa-repository';
// import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    { provide: PessoaRepository, useClass: PrismaPessoaRepository },
  ],
})
export class AppModule {}
