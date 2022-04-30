import { Request, Response } from 'express';
import { Body, JsonController, Get, HttpCode, Param, Req, Res } from 'routing-controllers';
import { ExpertOperations } from '../b_logic/ExpertOperations';
import { Message } from '../protocol/Message';

@JsonController()
export class ExpertController {

  @Get('/api/expert/:email')
  @HttpCode(200)
  async getExpert(
    @Param('email') email: string,
    @Req() request: Request
    ) {
    const expertOperations: ExpertOperations = new ExpertOperations();
    const message: Message = {
        method: request.method,
        result: await expertOperations.hasExpertToBase(email)
    }
    return message;
  }
}