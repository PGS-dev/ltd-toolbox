import { expect } from 'vitest'

export type Primitive = number | string | object | boolean | any[]

export type PrimitiveConstructor = NumberConstructor | StringConstructor | ObjectConstructor | ArrayConstructor | BooleanConstructor

expect.extend({
  toMatchSchema(this , received: Record<string, Primitive>, schema: Record<string, PrimitiveConstructor>) {
    const { isNot } = this

    if (!received) {
      return {
        pass: false,
        message: () => `Received is null or undefined!`
      }
    }

    for(const [key, value] of Object.entries(received) ) {
      if (value.constructor != schema[key]) {
        return {
          pass: false,
          message: () => `Passed object ${ isNot ? `satisfies` : `does not satisfy`} extepcted schema${ isNot ? ` (but it shouldn't!)` : ``}. `,
          actual: `${key}: ${value} (${value.constructor})`,
          expected: `${key}: ${schema[key]}`
        }
        break;
      }
    }

    return { pass: true, message: () => `` }
  }
})
