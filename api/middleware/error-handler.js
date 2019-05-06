const errorHandler = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    ctx.throw(`An error occurred: ${error}`)
  }
}

module.exports = errorHandler
