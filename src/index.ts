import { CeiPipe } from './cei.pipe';
import { TelefonePipe } from './telefone.pipe';
import { CpfPipe } from './cpf.pipe';
import { CnpjPipe } from './cnpj.pipe';
import { CepPipe } from './cep.pipe';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        CepPipe,
        CnpjPipe,
        CpfPipe,
        TelefonePipe,
        CeiPipe
    ],
    exports: [
        CepPipe,
        CnpjPipe,
        CpfPipe,
        TelefonePipe,
        CeiPipe
    ]
})
export class Ng2BRPipesModule { }
