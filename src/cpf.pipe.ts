import { isString, formatCpf, removeNonDigits } from './utils';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cpf'
})
// 019.642.561-19
export class CpfPipe implements PipeTransform {
    transform(value: any): any {
        if (!isString(value)) {
            return value;
        }
        const onlyDigits = removeNonDigits(value);

        if(onlyDigits && onlyDigits.length === 11) {
            return formatCpf(onlyDigits);
        }

        return value;
    }
}
