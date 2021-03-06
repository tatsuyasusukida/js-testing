const assert = require('assert')
const {TestBase} = require('../test/test-base')
const {Adder} = require('./adder')

class AdderTest extends TestBase {
  async testAdd () {
    const adder = new Adder()
    const operand1 = 1
    const operand2 = 2
    const actual = adder.add(operand1, operand2)
    const expected = 3

    assert.deepStrictEqual(actual, expected)
  }
}

if (require.main === module) {
  main()
}

async function main () {
  try {
    await new AdderTest().print()
  } catch (err) {
    console.error(err.message)
    console.debug(err.stack)
  }
}

module.exports.AdderTest = AdderTest
