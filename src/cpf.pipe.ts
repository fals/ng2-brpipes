import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cpf'
})
// 019.642.561-19
export class CpfPipe implements PipeTransform {
    transform(value: string): any {
        if(value && value.length === 11) {
            return `${value.substr(0, 3)}.${value.substr(3, 3)}.${value.substr(6, 3)}-${value.substr(9, 2)}`
        }

        return value;
    }
}