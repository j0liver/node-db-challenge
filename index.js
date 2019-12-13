const server = require('./api/server');

const PORT = 4500;

server.listen(PORT, () => {
    console.log(`\n Listening on port ${PORT}...\n`)
});