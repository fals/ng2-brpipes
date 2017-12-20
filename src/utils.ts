export function isString(value: any): boolean {

    return typeof value === 'string';
}

export function hasLength(value: any): boolean {

    return value.toString().trim().length > 0;
}