![](https://i.ibb.co/hVwPP3K/case-to-case.png)

#### Installation ([Try it on StackBlitz](https://stackblitz.com/edit/typescript-g894yk?file=index.ts))

```
npm i case-to-case
```

#### Using

```ts
import { CaseToCase } from 'case-to-case'

const string = new CaseToCase()
const stringInAnyCase = 'helloWorld'

// Bring a string to a specific case
string.toCamelCase(stringInAnyCase) // ➡️ helloWorld
string.toLowerCase(stringInAnyCase) // ➡️ hello-world
string.toLowerKebabCase(stringInAnyCase) // ➡️ hello-world
string.toPascalCase(stringInAnyCase) // ➡️ HelloWorld
string.toUpperCase(stringInAnyCase) // ➡️ HELLO-WORLD
string.toUpperKebabCase(stringInAnyCase) // ➡️ HELLO-WORLD
string.toUpperSnakeCase(stringInAnyCase) // ➡️ HELLO_WORLD

// Is Case
string.isCamelCase(stringInAnyCase) // ➡️ true
string.isLowerCase(stringInAnyCase) // ➡️ false
string.isLowerKebabCase(stringInAnyCase) // ➡️ false
string.isLowerSnakeCase(stringInAnyCase) // ➡️ false
string.isUpperCase(stringInAnyCase) // ➡️ false
string.isUpperKebabCase(stringInAnyCase) // ➡️ false
string.isUpperSnakeCase(stringInAnyCase) // ➡️ false

// Define Case
string.defineCase(stringInAnyCase) // ➡️ camelCase
```