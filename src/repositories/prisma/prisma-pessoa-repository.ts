import { PessoaRepository } from '../pessoa-repository';
import { PrismaService } from './../../database/prisma.service';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaPessoaRepository implements PessoaRepository {
    constructor(private prisma: PrismaService){}

    async create(name: string, pessoaFunction: string): Promise<void> {
        await this.prisma.pessoa.create({
            data: {
                id: randomUUID(),
                name,
                function: pessoaFunction
            }
        })
    }
}