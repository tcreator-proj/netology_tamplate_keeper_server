import { Controller, Get } from 'routing-controllers';
import { Expert } from '../entity/Expert';
import ExpertRepository from '../repository/ExpertRepository';

@Controller()
export class ExpertController {

  @Get('/experts/')
  async getAll() {
    const expertRepository: ExpertRepository = new ExpertRepository();
    const all: Expert[] = await expertRepository.getAll();
    return all;
  }
}