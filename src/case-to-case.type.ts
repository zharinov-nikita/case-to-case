export type TypeDefineCase =
  | 'camelCase'
  | 'pascalCase'
  | 'lowerSnakeCase'
  | 'upperSnakeCase'
  | 'lowerKebabCase'
  | 'upperKebabCase'
  | 'lowerCase'
  | 'upperCase'
  | 'capitalizeCase'

export interface TypeCase {
  camelCase: 'camelCase'
  pascalCase: 'PascalCase'
  lowerSnakeCase: 'lower_snake_case'
  upperSnakeCase: 'UPPER_SNAKE_CASE'
  lowerKebabCase: 'lower-kebab-case'
  upperKebabCase: 'UPPER-KEBAB-CASE'
  lowerCase: 'lowercase'
  upperCase: 'UPPERCASE'
  capitalizeCase: 'Capitalizecase'
}

export type TypeIsCase = `is${Capitalize<TypeDefineCase>}`
export type TypeToCase = `to${Capitalize<TypeDefineCase>}`
