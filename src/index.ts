import { createExpressServer } from 'routing-controllers';
import { ExpertController } from './controllers/ExpertController';
import { AppDataSource } from './data-source';

const port: number = 3000;



AppDataSource.initialize().then( async () => {
  const app = createExpressServer({
    controllers: [ExpertController],  
  });
  app.listen(port);
})



