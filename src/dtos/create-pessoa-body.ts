import {IsNotEmpty} from 'class-validator'

export class CreatePessoaBody {

    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    function: string;
}