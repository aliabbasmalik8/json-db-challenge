module.exports = {
  updateRecord,
  getRecord,
  deleteRecord
}

function updateRecord () {
  return [
    {
      title: 'should create file and append data',
      url: '/rn1abu8',
      message: 'file creation',
      status: 200,
      data: { 'score': 80 }
    },
    {
      title: 'append data in existing file',
      url: '/rn1abu8/courses/calculus/quizzes/ye0ab61',
      message: 'append data',
      status: 200,
      data: { 'score': 80 }
    },
    {
      title: 'append data in existing file',
      url: '/rn1abu8/courses/calculus/quizzes/ye0ab61',
      message: 'append data',
      status: 200,
      data: { 'score': 80 }
    },
    {
      title: 'append data in existing file',
      url: '/rn1abu8/courses/calculus/papers/ye0ab61',
      message: 'append data',
      status: 200,
      data: { 'score': 80 }
    }
  ]
}

function getRecord () {
  return [
    {
      title: 'get all data fron file',
      url: '/rn1abu8',
      message: 'get all data',
      status: 200
    },
    {
      title: 'should response with 404',
      url: '/rn1abu9/courses/calculus/papers/ye0ab61',
      message: 'file not found',
      status: 404
    },
    {
      title: 'should response with data',
      url: '/rn1abu8/courses/calculus/papers/ye0ab61',
      message: 'data found',
      status: 200
    },
    {
      title: 'should response with 404',
      url: '/rn1abu8/courses/calculus/papers/ye0ab611',
      message: 'record not found',
      status: 404
    }
  ]
}

function deleteRecord () {
  return [
    {
      title: 'delete data from file',
      url: '/rn1abu8/courses/calculus',
      message: 'record removed',
      status: 200
    },
    {
      title: 'delete all data from file',
      url: '/rn1abu8',
      message: 'deleted all data from file',
      status: 200
    },
    {
      title: 'data not found',
      url: '/rn1abu8/courses/calculus',
      message: 'data not found',
      status: 200
    }
  ]
}
