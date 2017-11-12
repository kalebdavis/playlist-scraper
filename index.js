import express from 'express';

const app = express();

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('starting server');
});

app.get('/api/health-check', (req, res) => {
    res.sendStatus(200);
});

export default app;
