const fs = require('fs')
const objUtils = require('./objUtils')

module.exports = {
  updateFile,
  getRecord,
  deleteRecord
}

function updateFile (req, res) {
  const records = req.params[0].split('/')
  const filename = `${req.params.studentId}.json`
  records.shift()
  const isExistFile = fs.existsSync(filename)
  const obj = isExistFile ? JSON.parse(fs.readFileSync(filename)) : {}
  objUtils.updateObj(obj, records, req.body)
  fs.writeFileSync(filename, JSON.stringify(obj))
  res.status(200).json({ ...obj })
}

function getRecord (req, res) {
  const records = req.params[0].split('/')
  const filename = `${req.params.studentId}.json`
  records.shift()
  const isExistFile = fs.existsSync(filename)
  if (!isExistFile) return res.status(404).json({ message: 'file not exist.' })
  let obj = JSON.parse(fs.readFileSync(filename))
  obj = objUtils.getObj(obj, records)
  if (!obj) return res.status(404).json({ message: 'record not exist.' })
  res.status(200).json({ ...obj })
}

function deleteRecord (req, res) {
  const records = req.params[0].split('/')
  const filename = `${req.params.studentId}.json`
  records.shift()
  const isExistFile = fs.existsSync(filename)
  if (!isExistFile) return res.status(404).json({ message: 'file not exist.' })
  let obj = JSON.parse(fs.readFileSync(filename))
  obj = objUtils.deleteObj(obj, records)
  if (!obj) return res.status(404).json({ message: 'record not exist.' })
  fs.writeFileSync(filename, JSON.stringify(obj))
  res.status(200).json({ ...obj })
}
