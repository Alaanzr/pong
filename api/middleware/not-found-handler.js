const notFoundHandler = async ({ request, notFound }) => {
  console.log('NOT FOUND**')
  const { method, path } = request

  const message = `${method} ${path}`

  notFound([
    { message: `No endpoint matched your request: ${message}` }
  ])
}

module.exports = notFoundHandler
