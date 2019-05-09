import * as Salak from 'salak'

export default (options: Salak.SalakConfig['test'], app: Salak) => {
  return async (ctx: Salak.Context, next: Function) => {
    ctx.type = options.name

    await next()
  }
}
