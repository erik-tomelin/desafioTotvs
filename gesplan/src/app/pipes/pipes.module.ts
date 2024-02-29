import { NgModule } from '@angular/core';
import { TelefoneFormatPipe } from './telefone-format.pipe';

@NgModule({
    declarations: [
        TelefoneFormatPipe
    ],
    exports: [
        TelefoneFormatPipe
    ]
})
export class PipesModule { }