import express from 'express'

const server = express();

server.use('/api', express.static('db', {
    extensions: ['json']
}));

server.get('*', (req, res) => res.send({
    now: Date.now(),
    foo: 'bar'
}));

server.listen(3000, () => console.log('http://localhost:3000'));