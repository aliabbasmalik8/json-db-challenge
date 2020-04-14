const tape = require('tape')
const jsonist = require('jsonist')

const port = (process.env.PORT = process.env.PORT || require('get-port-sync')())
const endpoint = `http://localhost:${port}`

const server = require('./server')

const testCases = require('./testCases')

tape('health', async function (t) {
  const url = `${endpoint}/health`
  jsonist.get(url, (err, body) => {
    if (err) t.error(err)
    t.ok(body.success, 'should have successful healthcheck')
    t.end()
  })
})

testCases.updateRecord().map((testCase) => {
  tape(testCase.title, async function (t) {
    const url = `${endpoint}${testCase.url}`
    jsonist.put(url, testCase.data, (err, body) => {
      if (err) t.error(err)
      t.ok(testCase.status, testCase.message)
      t.end()
    })
  })
})

testCases.getRecord().map((testCase) => {
  tape(testCase.title, async function (t) {
    const url = `${endpoint}${testCase.url}`
    jsonist.get(url, testCase.data, (err, body) => {
      if (err) t.error(err)
      t.ok(testCase.status, testCase.message)
      t.end()
    })
  })
})

testCases.deleteRecord().map((testCase) => {
  tape(testCase.title, async function (t) {
    const url = `${endpoint}${testCase.url}`
    jsonist.delete(url, testCase.data, (err, body) => {
      if (err) t.error(err)
      t.ok(testCase.status, testCase.message)
      t.end()
    })
  })
})

tape('cleanup', function (t) {
  server.close()
  t.end()
})
