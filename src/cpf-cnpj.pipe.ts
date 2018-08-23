import { isString, formatCpf, formatCnpj } from './utils';
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

        if(value && value.length === 11) {
            return formatCpf(value);
        } else if (value && value.length === 14) {
            return formatCnpj(value);
        }

        return value;
    }
}