class AppError extends Error {
  constructor(statusCode, message) {
    super()
    this.statusCode = statusCode
    this.message = message
  }
}

const errorHandler = (error, res) => {
  const { statusCode, message } = error

  

  if (error.name === 'TokenExpiredError') {
    res.status(401).json({
      status: 'error',
      statusCode: 401,
      message,
    })
  }

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  })
}

export { errorHandler, AppError }
