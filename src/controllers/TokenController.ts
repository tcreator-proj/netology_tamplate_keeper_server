import { Controller, Get } from 'routing-controllers';
import { Token } from '../entity/Token';
import TokenRepository from '../repository/TokenRepository';

@Controller()
export class TokenController {

  @Get('/api/tokens')
  async getAll() {
    const tokenRepository: TokenRepository = new TokenRepository();
    const all: Token[] = await tokenRepository.getAll();
    return all;
  }
}