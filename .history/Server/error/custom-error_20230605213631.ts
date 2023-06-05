class CustomAPIError extends Error {
  constructor(message: string) {
    super(message)
  }
}

module.exports = CustomAPIError