import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'real'
})
// R$ 1.000,00
export class RealPipe implements PipeTransform {
    transform(value: any,
        decimalDelimiter: string = ',',
        decimalLength: number = 2,
        chunkDelimiter: string = '.',
        chunkLength: number = 3): any {

        if (isNaN(value)) {
            return value;
        }
        
        let result = '\\d(?=(\\d{' + chunkLength + '})+' + (decimalLength > 0 ? '\\D' : '$') + ')'
        let num = value.toFixed(Math.max(0, ~~decimalLength));

        return 'R$' + (decimalDelimiter ? num.replace('.', decimalDelimiter) : num).replace(new RegExp(result, 'g'), '$&' + chunkDelimiter);
    }
}