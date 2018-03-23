import { RealPipe } from './real.pipe';
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
        CeiPipe,
        RealPipe
    ],
    exports: [
        CepPipe,
        CnpjPipe,
        CpfPipe,
        TelefonePipe,
        CeiPipe,
        RealPipe
    ]
})
export class Ng2BRPipesModule { }
