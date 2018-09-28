module.exports = (app) => {
  const config = {}

  config.logger = {
    injectConsole: false,
    defaultLevel: 'error'
  }

  return config
}
