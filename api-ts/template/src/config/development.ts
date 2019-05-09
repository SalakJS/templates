import * as Salak from 'salak'

export default (app: Salak) => {
  const config = {} as Salak.DeepPartial<Salak.SalakConfig>

  config.port = 3000

  return config
}
