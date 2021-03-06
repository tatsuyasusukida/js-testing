const assert = require('assert')
const querystring = require('querystring')
const fetch = require('node-fetch')
const {TestBase} = require('../test/test-base')

class ApiTest extends TestBase {
  async testApiAdd () {
    const search = '?' + querystring.stringify({
      operand1: 1,
      operand2: 2,
    })

    const url = 'http://127.0.0.1:3000/api/add' + search
    const response = await fetch(url)
    const actual = await response.json()
    const expected = {
      operand1: 1,
      operand2: 2,
      result: 3,
    }

    assert.deepStrictEqual(actual, expected)
  }
}

if (require.main === module) {
  main()
}

async function main () {
  try {
    await new ApiTest().print()
  } catch (err) {
    console.error(err.message)
    console.debug(err.stack)
  }
}

module.exports.ApiTest = ApiTest
