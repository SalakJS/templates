import * as Salak from 'salak'
import * as path from 'path'

declare module 'salak' {
  interface SalakConfig {
    test: {
      name: string
    }
  }
}

export default (app: Salak) => {
  const config = {} as Salak.DeepPartial<Salak.SalakConfig>

  config.port = 8080

  config.middlewares = [
    {
      name: 'cors',
      package: 'salak-cors'
    },
    'test'
  ]

  // ref to https://github.com/SalakJS/salak-cors#options
  config.cors = {
    credentials: true
  }

  config.test = {
    name: 'test'
  }

  config.swagger = {
    enable: false
  }

  config.logger = {
    root: path.join(app.baseDir, 'logs'),
    injectConsole: true,
    formatType: 'log4js',
    fileType: 'file',
    transportsDefaultOptions: {
      file: {
        maxFiles: 10,
        maxsize: 100 * 1024 * 1024
      }
    }
  }

  config.swagger = {
    enable: true,
    spec: {
      info: {
        title: '{{name}}',
        description: `
Contact: {{{author}}}<br />
API Description
        `,
        version: '1.0.0'
      },
      tags: [
        {
          name: 'Salak',
          description: 'Salak Module'
        }
      ]
    }
  }

  config.unknown = 'unknown'

  return config
}
