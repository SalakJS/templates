module.exports = {
  port: 8000,
  routes: {
    defaultRoute: 'welcome'
  },
  view: {
    extension: 'ejs'
  },
  swagger: {
    spec: {
      info: {
        title: 'simple api',
        description: 'api for application',
        version: '1.0.0'
      },
      tags: []
    }
  }
}
