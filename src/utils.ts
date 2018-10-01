export function isString(value: any): boolean {

    return typeof value === 'string';
}

export function hasLength(value: any): boolean {

    return value.toString().trim().length > 0;
}

export function removeNonDigits(value: string): string {
    return value.replace(/\D/g,'');
}

export function formatCnpj(value: string): string {

    return `${value.substr(0, 2)}.${value.substr(2, 3)}.${value.substr(5, 3)}/${value.substr(8, 4)}-${value.substr(12, 2)}`;
}

export function formatCpf(value: string): string {

    return `${value.substr(0, 3)}.${value.substr(3, 3)}.${value.substr(6, 3)}-${value.substr(9, 2)}`;
}
