import type { TypeDefineCase } from './case-to-case.type'

export class CaseToCase {
  public toCamelCase(stringInAnyCase: string): string {
    if (stringInAnyCase.length === 0) return ''
    const stringInKebabCase = this.anyCaseToKebabCase(stringInAnyCase)
    const array = stringInKebabCase.split('-')
    const firstWord = array[0]
    const otherWord = array.map((item, index) => {
      if (index > 0) {
        return `${item[0].toUpperCase()}${item.substring(1)}`
      }
    })

    return `${firstWord}${otherWord.join('')}`
  }

  public toUpperSnakeCase(stringInAnyCase: string): string {
    if (stringInAnyCase.length === 0) return ''
    const stringInKebabCase = this.anyCaseToKebabCase(stringInAnyCase)
    const array = stringInKebabCase.split('-')
    const string = array.map((item) => item.toUpperCase())
    return string.join('_')
  }

  public toLowerSnakeCase(stringInAnyCase: string): string {
    if (stringInAnyCase.length === 0) return ''
    const stringInKebabCase = this.anyCaseToKebabCase(stringInAnyCase)
    const array = stringInKebabCase.split('-')
    const string = array.map((item) => item.toLowerCase())
    return string.join('_')
  }

  public toUpperKebabCase(stringInAnyCase: string): string {
    if (stringInAnyCase.length === 0) return ''
    const stringInKebabCase = this.anyCaseToKebabCase(stringInAnyCase)
    return stringInKebabCase.toUpperCase()
  }

  public toLowerKebabCase(stringInAnyCase: string): string {
    if (stringInAnyCase.length === 0) return ''
    const stringInKebabCase = this.anyCaseToKebabCase(stringInAnyCase)
    return stringInKebabCase.toLowerCase()
  }

  public toPascalCase(stringInAnyCase: string): string {
    if (stringInAnyCase.length === 0) return ''
    const stringInKebabCase = this.anyCaseToKebabCase(stringInAnyCase)
    const array = stringInKebabCase.split('-')
    const firstWord = `${array[0][0].toUpperCase()}${array[0].substring(1)}`
    const otherWord = array.map((item, index) => {
      if (index > 0) {
        return `${item[0].toUpperCase()}${item.substring(1)}`
      }
    })

    return `${firstWord}${otherWord.join('')}`
  }

  public toLowerCase(stringInAnyCase: string): string {
    if (stringInAnyCase.length === 0) return ''
    return stringInAnyCase.toLowerCase()
  }

  public toUpperCase(stringInAnyCase: string): string {
    if (stringInAnyCase.length === 0) return ''
    return stringInAnyCase.toUpperCase()
  }

  public toCapitalizeCase(stringInAnyCase: string): string {
    if (stringInAnyCase.length === 0) return ''
    const stringInKebabCase = this.anyCaseToKebabCase(stringInAnyCase).replaceAll('-', '')
    return stringInKebabCase.charAt(0).toUpperCase() + stringInKebabCase.slice(1).toLowerCase()
  }

  private isFirstLetterUpperCase(stringInAnyCase: string): boolean {
    if (stringInAnyCase.length === 0) return false
    return stringInAnyCase.charAt(0).toUpperCase() === stringInAnyCase.charAt(0)
  }

  private isFirstLetterLowerCase(stringInAnyCase: string): boolean {
    if (stringInAnyCase.length === 0) return false
    return stringInAnyCase.charAt(0).toLowerCase() === stringInAnyCase.charAt(0)
  }

  private isStringContainsDash(stringInAnyCase: string): boolean {
    if (stringInAnyCase.length === 0) return false
    return stringInAnyCase.search(/-/g) > 0
  }

  private isStringContainsUnderlining(stringInAnyCase: string): boolean {
    if (stringInAnyCase.length === 0) return false
    return stringInAnyCase.search(/_/g) > 0
  }

  private isStringUpperCase(stringInAnyCase: string): boolean {
    if (stringInAnyCase.length === 0) return false
    return stringInAnyCase.toUpperCase() === stringInAnyCase
  }

  private isStringLowerCase(stringInAnyCase: string): boolean {
    if (stringInAnyCase.length === 0) return false
    return stringInAnyCase.toLowerCase() === stringInAnyCase
  }

  public isLowerCase(stringInAnyCase: string): boolean {
    return stringInAnyCase.toLowerCase() === stringInAnyCase
  }

  public isUpperCase(stringInAnyCase: string): boolean {
    return stringInAnyCase.toUpperCase() === stringInAnyCase
  }

  public isCamelCase(stringInAnyCase: string): boolean {
    if (stringInAnyCase.length === 0) return false
    if (this.isFirstLetterUpperCase(stringInAnyCase)) return false
    if (this.isStringContainsDash(stringInAnyCase)) return false
    if (this.isStringContainsUnderlining(stringInAnyCase)) return false
    if (this.isStringUpperCase(stringInAnyCase)) return false
    return true
  }

  public isPascalCase(stringInAnyCase: string): boolean {
    if (stringInAnyCase.length === 0) return false
    if (this.isFirstLetterLowerCase(stringInAnyCase)) return false
    if (this.isStringContainsDash(stringInAnyCase)) return false
    if (this.isStringContainsUnderlining(stringInAnyCase)) return false
    if (this.isStringUpperCase(stringInAnyCase)) return false
    return true
  }

  public isUpperSnakeCase(stringInAnyCase: string): boolean {
    if (stringInAnyCase.length === 0) return false
    if (this.isStringUpperCase(stringInAnyCase) && this.isStringContainsUnderlining(stringInAnyCase)) {
      return true
    }
    return false
  }

  public isLowerSnakeCase(stringInAnyCase: string): boolean {
    if (stringInAnyCase.length === 0) return false
    if (this.isStringLowerCase(stringInAnyCase) && this.isStringContainsUnderlining(stringInAnyCase)) {
      return true
    }
    return false
  }

  public isUpperKebabCase(stringInAnyCase: string): boolean {
    if (stringInAnyCase.length === 0) return false
    if (this.isStringUpperCase(stringInAnyCase) && this.isStringContainsDash(stringInAnyCase)) {
      return true
    }
    return false
  }

  public isLowerKebabCase(stringInAnyCase: string): boolean {
    if (stringInAnyCase.length === 0) return false
    if (this.isStringLowerCase(stringInAnyCase) && this.isStringContainsDash(stringInAnyCase)) {
      return true
    }
    return false
  }

  public isCapitalizeCase(stringInAnyCase: string): boolean {
    if (stringInAnyCase.length === 0) return false

    if (this.isCamelCase(stringInAnyCase)) return false
    if (this.isUpperSnakeCase(stringInAnyCase)) return false
    if (this.isLowerSnakeCase(stringInAnyCase)) return false
    if (this.isUpperKebabCase(stringInAnyCase)) return false
    if (this.isLowerKebabCase(stringInAnyCase)) return false

    let numberCapitalLetters = 0

    stringInAnyCase.split('').forEach((item) => {
      if (item.toUpperCase() === item) return (numberCapitalLetters += 1)
    })

    return numberCapitalLetters === 1
  }

  private anyCaseToKebabCase(stringInAnyCase: string): string {
    if (stringInAnyCase.length === 0) {
      return stringInAnyCase
    }
    if (this.isCamelCase(stringInAnyCase)) {
      return stringInAnyCase
        .split(/(?=[A-Z])/)
        .map((item) => item.toLowerCase())
        .toString()
        .replaceAll(',', '-')
    }
    if (this.isLowerKebabCase(stringInAnyCase)) {
      return stringInAnyCase
    }
    if (this.isLowerSnakeCase(stringInAnyCase)) {
      return stringInAnyCase.replaceAll('_', '-')
    }
    if (this.isPascalCase(stringInAnyCase)) {
      return (
        stringInAnyCase.charAt(0).toLowerCase() +
        stringInAnyCase
          .slice(1)
          .split(/(?=[A-Z])/)
          .map((item) => item.toLowerCase())
          .toString()
          .replaceAll(',', '-')
      )
    }

    if (this.isUpperKebabCase(stringInAnyCase)) {
      return stringInAnyCase.toLowerCase()
    }

    if (this.isUpperSnakeCase(stringInAnyCase)) {
      return stringInAnyCase.replaceAll('_', '-').toLowerCase()
    }

    return stringInAnyCase
  }

  public defineCase(stringInAnyCase: string): TypeDefineCase {
    if (
      this.isUpperCase(stringInAnyCase) &&
      !this.isUpperKebabCase(stringInAnyCase) &&
      !this.isUpperSnakeCase(stringInAnyCase)
    )
      return 'upperCase'
    if (
      this.isLowerCase(stringInAnyCase) &&
      !this.isLowerKebabCase(stringInAnyCase) &&
      !this.isLowerSnakeCase(stringInAnyCase)
    )
      return 'lowerCase'
    if (this.isCamelCase(stringInAnyCase)) return 'camelCase'
    if (this.isPascalCase(stringInAnyCase)) return 'pascalCase'
    if (this.isUpperSnakeCase(stringInAnyCase)) return 'upperSnakeCase'
    if (this.isLowerSnakeCase(stringInAnyCase)) return 'lowerSnakeCase'
    if (this.isUpperKebabCase(stringInAnyCase)) return 'upperKebabCase'
    if (this.isLowerKebabCase(stringInAnyCase)) return 'lowerKebabCase'
    return 'lowerCase'
  }
}
