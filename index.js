require('dotenv').config()
const Hapi = require('@hapi/hapi')
const Inert = require('@hapi/inert')
const Vision = require('@hapi/vision')
const Ejs = require('ejs')
const HapiSwagger = require('hapi-swagger')
const mainRouter = require('./core/route')
const config = require('./core/config')

async function start() {
  const server = Hapi.server({
    port: config.PORT,
    host: config.HOST
  });

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: {
        info: {
          title: 'JSON Restructure and Github Search API Swagger'
        },
        documentationPath: '/swagger',
        grouping: 'tags'
      }
    }
  ])

  server.views({
    engines: { ejs: Ejs },
    relativeTo: __dirname,
    path: 'views'
  })

  server.route(mainRouter);

  await server.start();
  console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

start()
