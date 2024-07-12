export abstract class PessoaRepository {
  abstract create(name: string, pessoaFunction: string): Promise<void>;
}
