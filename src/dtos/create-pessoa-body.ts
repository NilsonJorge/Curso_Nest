import {IsNotEmpty, Length} from 'class-validator'

export class CreatePessoaBody {

    @IsNotEmpty()
    @Length(5,100)
    name: string;

    @IsNotEmpty({message: "A função não pode ser vazia"})
    function: string;
}