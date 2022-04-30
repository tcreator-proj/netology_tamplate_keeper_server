import { Request, Response } from 'express';
import { Controller, Get, QueryParam, Req, Res, JsonController } from 'routing-controllers';
import { Scope } from '../enums/Scope';

@JsonController()
export class TokenController {

  @Get('/api/token/')
  async getAllTokensByTask(
    @QueryParam("expert") expert: string, 
    @QueryParam("taskname") taskName: string,
    @QueryParam("scope") scope: Scope, 
    @Req() request: Request,
    @Res() response: Response
  ) {
    console.log(taskName, scope, expert)

  }
}