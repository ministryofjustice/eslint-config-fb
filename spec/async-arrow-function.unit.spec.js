const test = require('tape')
const validate = require('./helpers/validate')

const codeInvalid = `const asyncFn = async () => {}`

test('no-var - when a var is used', t => {
  const result = validate(codeInvalid)
  t.plan(1)
  t.true(result.valid, 'it should be valid')
})
