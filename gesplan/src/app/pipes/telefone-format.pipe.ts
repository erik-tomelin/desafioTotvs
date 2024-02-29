import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'telefoneFormat'
})
export class TelefoneFormatPipe implements PipeTransform {
    transform(telefone: string): string {
        if (!telefone) return telefone;
        const regex = /(\d{2})(\d{1})(\d{4})(\d{4})/;
        return telefone.replace(regex, '($1) $2 $3-$4');
    }
}