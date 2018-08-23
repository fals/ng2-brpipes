import { isString, formatCnpj } from './utils';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cnpj'
})
// 99.999.999/9999-99
export class CnpjPipe implements PipeTransform {
    transform(value: any): any {
        if (!isString(value)) {
            return value;
        }

        if(value && value.length === 14) {
            return formatCnpj(value);
        }

        return value;
    }
}