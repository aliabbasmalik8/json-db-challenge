module.exports = {
  updateObj,
  getObj,
  deleteObj
}

function updateObj (obj, records, body) {
  if (records.length === 0) {
    return mergeObjects(obj, body)
  }
  if (!obj.hasOwnProperty(records[0])) {
    records.reduce((prev, curr) => (
      (curr === records[records.length - 1]) ? prev[curr] = body : prev[curr] = {}
    ), obj)
    return obj
  }
  obj = obj[records[0]]
  records.shift()
  return updateObj(obj, records, body)
}

function getObj (obj, records) {
  if (records.length === 0) {
    return obj
  }
  if (!obj.hasOwnProperty(records[0])) {
    return false
  }
  obj = obj[records[0]]
  records.shift()
  return getObj(obj, records)
}

function deleteObj (obj, records) {
  if (records.length === 0) {
    return {}
  }
  if (!obj.hasOwnProperty(records[0])) {
    return false
  }
  obj = obj[records[0]]
  records.shift()
  return deleteObj(obj, records)
}

function mergeObjects (obj1, obj2) {
  for (const attrname in obj2) { obj1[attrname] = obj2[attrname] }
}
