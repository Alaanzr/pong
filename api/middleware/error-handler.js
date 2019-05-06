const errorHandler = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    console.log('***', error)
    ctx.throw(`An error occurred: ${error}`)
  }
}

module.exports = errorHandler
