const path = require('path')

module.exports = (app) => {
  const config = {}

  config.port = 8080

  config.middleware = [
    {
      name: 'cors',
      package: 'salak-cors'
    }
  ]

  // ref to https://github.com/SalakJS/salak-cors#options
  config.cors = {
    credentials: false // if need cookie, set to `true`
  }

  config.logger = {
    root: path.join(app.baseDir, 'logs'),
    injectConsole: true,
    formatType: 'log4js',
    fileType: 'file'
  }

  config.swagger = {
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

  return config
}
