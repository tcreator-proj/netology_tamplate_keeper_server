import { AppDataSource } from "./data-source"
import { Expert } from "./entity/Expert"
import {Express} from 'express';

import { createExpressServer } from 'routing-controllers';

const port: number = 3000;
app.get('/hello', (req, res) => {
    res.send(req);
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
AppDataSource.initialize().then(async () => {

    // console.log("Inserting a new user into the database...")
    // const expert = new Expert()
    // expert.email = "expert1@gmail.com"
    // expert.expert_id = 1
    // expert.firstName = "Verdandy"
    // expert.surname = "Expertof"
    // await AppDataSource.manager.save(expert)
    // console.log("Saved a new user with id: " + expert.email)

    // console.log("Loading users from the database...")
    // const experts = await AppDataSource.manager.find(Expert)
    // console.log("Loaded users: ", experts)

    // console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
