import { isString, formatCpf, formatCnpj, removeNonDigits } from './utils';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cpfCnpj'
})
// 019.642.561-19 || 99.999.999/9999-99
export class CpfCnpjPipe implements PipeTransform {
    transform(value: any): any {
        if (!isString(value)) {
            return value;
        }

        const onlyDigits = removeNonDigits(value);

        if(onlyDigits && onlyDigits.length === 11) {
            return formatCpf(onlyDigits);
        } else if (onlyDigits && onlyDigits.length === 14) {
            return formatCnpj(onlyDigits);
        }

        return value;
    }
}
