import { isString } from './utils';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cep'
})
// 72006-226
export class CepPipe implements PipeTransform {
    transform(value: any): any {
        if (!isString(value)) {
            return value;
        }

        if(value && value.length === 8) {
            return `${value.substr(0, 5)}-${value.substr(5, 3)}`;
        }

        return value;
    }
}