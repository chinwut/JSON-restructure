const Hapi = require('@hapi/hapi')

async function start() {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

module.exports = { start }