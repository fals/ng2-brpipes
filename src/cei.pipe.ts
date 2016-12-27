import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cei'
})
// 76.119.87629/85
export class CeiPipe implements PipeTransform {
    transform(value: string): any {
        if (value && value.length === 12) {
            return `${value.substr(0, 2)}.${value.substr(2, 3)}.${value.substr(5, 5)}/${value.substr(10, 2)}`;
        }

        return value;
    }
}