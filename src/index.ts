import { createExpressServer } from 'routing-controllers';
import { ExpertController } from './controllers/ExpertController';
import { TokenController } from './controllers/TokenController';
import { AppDataSource } from './data-source';

const port: number = 3000;

AppDataSource.initialize().then( async () => {
  const app = createExpressServer({
    controllers: [TokenController, ExpertController],
    cors: ["https://netology.ru", "http://localhost:3000"]
  });
  app.listen(port);
})



