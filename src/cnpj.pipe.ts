import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cnpj'
})
// 99.999.999/9999-99
export class CnpjPipe implements PipeTransform {
    transform(value: string): any {
        if(value && value.length === 14) {
            return `${value.substr(0, 2)}.${value.substr(2, 3)}.${value.substr(5, 3)}/${value.substr(8, 4)}-${value.substr(12, 2)}`;
        }

        return value;
    }
}