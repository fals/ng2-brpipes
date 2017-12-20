import { isString, hasLength } from './utils';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'telefone'
})
// (31)9609-8689 ou (31)99609-8689
export class TelefonePipe implements PipeTransform {
    transform(value: any): any {
        if (!isString(value)) {
            return value;
        } else if (!hasLength(value)) {
            return '';
        } else if (value && value.length === 10) {
            return `(${value.substr(0, 2)})${value.substr(2, 4)}-${value.substr(6, 4)}`;
        } else if (value && value.length === 11) {
            return `(${value.substr(0, 2)})${value.substr(2, 5)}-${value.substr(7, 4)}`;
        } else {
            return value;
        }
    }
}