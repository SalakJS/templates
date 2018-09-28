module.exports = () => {
  const config = {}

  config.port = 8080

  config.logger = {
    injectConsole: false
  }

  return config
}
