// import { Controller, Get, Param } from 'routing-controllers';
// import { Expert } from '../entity/Expert';
// import ExpertRepository from '../repository/ExpertRepository';

// @Controller()
// export class ExpertController {

//   @Get('/api/expert/:email')
//   async getExpert(@Param('email') email: string) {
//     const expertRepository: ExpertRepository = new ExpertRepository();
//     const expert: Expert = await expertRepository.getExpert(email);
//     return expert;
//   }
// }