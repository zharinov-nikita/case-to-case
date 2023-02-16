import { describe, expect, test } from '@jest/globals'
import { CASE } from './case-to-case.constant'
import { CaseToCase } from './case-to-case.module'
import type { TypeDefineCase, TypeIsCase, TypeToCase } from './case-to-case.type'

describe('caseToCase', () => {
  const caseToCase = new CaseToCase()

  const caseValues = Object.values(CASE)
  const caseKeys = Object.keys(CASE) as TypeDefineCase[]

  function generateMethodName(value: TypeDefineCase, prefix: 'is' | 'to'): TypeIsCase | TypeToCase {
    return (prefix + value.charAt(0).toUpperCase() + value.slice(1)) as TypeIsCase | TypeToCase
  }

  caseKeys.forEach((caseKey, index) => {
    const methodName = generateMethodName(caseKey, 'to')
    const stringInAnyCase = caseValues[index]
    const toBe = caseValues[index]

    test(methodName, () => {
      expect(caseToCase[methodName](stringInAnyCase)).toBe(toBe)
      expect(caseToCase[methodName](stringInAnyCase)).toMatchSnapshot()
    })
  })

  caseKeys.forEach((caseKey, index) => {
    const methodName = generateMethodName(caseKey, 'is')
    const stringInAnyCase = caseValues[index]
    const toBe = caseToCase[methodName](stringInAnyCase) === caseToCase[methodName](stringInAnyCase)

    test(methodName, () => {
      expect(caseToCase[methodName](stringInAnyCase)).toBe(toBe)
      expect(caseToCase[methodName](stringInAnyCase)).toMatchSnapshot()
    })
  })
})
