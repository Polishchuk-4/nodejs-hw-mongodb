import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import {
  notFoundMiddleware,
  errorHandlerMiddleWare,
} from './middlewares/index.js';

import contactsRouter from './routers/contacts.js';

import { env } from './utils/env.js';

const PORT = Number(env('PORT', 3000));

export const setupServer = () => {
  const app = express();

  app.use(express.json());

  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.status(200).json({
      message: 'Hello Friend!',
    });
  });

  app.use(contactsRouter);

  app.use(notFoundMiddleware);

  app.use(errorHandlerMiddleWare);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
