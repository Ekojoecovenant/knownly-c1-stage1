import express from 'express';
import cors from 'cors';

import appRouter from './routes/app.route.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', appRouter);

export default app;
