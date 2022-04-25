import { createExpressServer } from 'routing-controllers';
import { ExpertController } from './controllers/ExpertController';
import { TokenController } from './controllers/TokenController';
import { AppDataSource } from './data-source';

const port: number = 3000;

AppDataSource.initialize().then( async () => {
  const app = createExpressServer({
    controllers: [ExpertController, TokenController],  
  });
  app.listen(port);
})



