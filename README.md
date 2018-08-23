# ng2-brpipes
Angular2 pipes for BR types.

## How to install

```bash
npm install ng2-brpipes --save
```

>Or use **[yarn](https://yarnpkg.com)** to prevent broken updated dependencies

```bash
yarn add ng2-brpipes
```

## How to Import the Module

There's only a main module, just import it globaly or wherever you want to use it:

```typescript
import {Ng2BRPipesModule} from 'ng2-brpipes';

@NgModule({
  imports: [Ng2BRPipesModule]
  exports: [Ng2BRPipesModule]
})
export class MyModule { }
```

# Available pipes

### RealPipe (NEW)

Transform number to Real currency like format.

```html
{{'9999.99' | real}} // output R$9.999,99
```

### CpfPipe

Transform string in CPF like format.

```html
{{'01964256119' | cpf}} // output 019.642.561-19
```
### CnpjPipe

Transform string in CNPJ like format.

```html
{{'99999999999999' | cnpj}} // output 99.999.999/9999-99
```
### CpfCnpjPipe

Transform string in CPF/CNPJ like format.

```html
{{'01964256119' | cpf}} // output 019.642.561-19
{{'99999999999999' | cnpj}} // output 99.999.999/9999-99
```

### CepPipe

Transform string in CEP like format.

```html
{{'72006226' | cep}} // output 72006-226
```

### CeiPipe

Transform string in CEI like format.

```html
{{'761198762985' | cei}} // output 76.119.87629/85
```

### TelefonePipe

Transform string in Telefone like format. Supports 8 and 9 digits phone numbers

```html
{{'3196098689' | telefone}} // output (31)9609-8689

{{'31996098689' | telefone}} // output (31)99609-8689
```




