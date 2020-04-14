const express = require('express')
const bodyParser = require('body-parser')

const api = require('./api')
const recordController = require('./recordController')
const middleware = require('./middleware')

const PORT = process.env.PORT || 1337

const app = express()

app.use(bodyParser.json())

app.get('/health', api.getHealth)
app.put('/:studentId*', recordController.updateFile)
app.get('/:studentId*', recordController.getRecord)
app.delete('/:studentId*', recordController.deleteRecord)

app.use(middleware.handleError)
app.use(middleware.notFound)

const server = app.listen(PORT, () =>
  console.log(`Server listening on port ${PORT}`)
)

if (require.main !== module) {
  module.exports = server
}
