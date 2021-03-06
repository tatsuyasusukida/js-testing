const assert = require('assert')
const {Adder} = require('./adder')

class AdderExampleTest {
  async run () {
    const tests = [
      this.testAdd,
    ]

    for (const test of tests) {
      await test.call(this)
      console.info(`PASS AdderExampleTest.${test.name}`)
    }
  }

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
    await new AdderExampleTest().run()
  } catch (err) {
    console.error(err.message)
    console.debug(err.stack)
  }
}

module.exports.AdderExampleTest = AdderExampleTest
