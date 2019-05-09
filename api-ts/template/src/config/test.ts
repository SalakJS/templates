import * as Salak from 'salak'

export default (app: Salak) => {
  const config = {} as Salak.DeepPartial<Salak.SalakConfig>

  config.logger = {
    injectConsole: false,
    defaultLevel: 'error'
  }

  return config
}
