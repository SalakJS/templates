const path = require('path')

module.exports = (app) => {
  const config = {}

  config.port = 8080

  config.routes = {
    defaultRoute: 'welcome'
  }

  config.logger = {
    root: path.join(app.baseDir, 'logs'),
    injectConsole: true,
    formatType: 'log4js',
    fileType: 'file'
  }

  config.plugin = [
    {
      name: 'view',
      package: 'salak-view'
    }
  ]

  config.view = {
    extension: 'ejs',
    engine: 'ejs'
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
          name: 'Page',
          description: 'Html Pages.'
        },
        {
          name: 'API',
          description: 'The API for pages.'
        }
      ]
    }
  }

  return config
}
