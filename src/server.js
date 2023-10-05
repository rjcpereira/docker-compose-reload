import express from 'express'

const port = process.env.PORT || 3000;

const server = express();

server.use('/api', express.static('db', {
    extensions: ['json']
}));

server.get('*', (req, res) => res.send({
    now: Date.now(),
    foo: 'bar'
}));

server.listen(port, () => console.log(`http://localhost:${port}`));