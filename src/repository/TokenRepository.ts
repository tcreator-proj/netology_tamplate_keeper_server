import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Token } from "../entity/Token";


class TokenRepository {
    private expertRepository: Repository<Token>;
    constructor() {
        this.expertRepository = AppDataSource.getRepository(Token);
    }

    public async getAll(): Promise<Token[]> {
        const expert: Token[] = await this.expertRepository.find();
        return expert;
    }
}

export const tokenRepository: TokenRepository = new TokenRepository();
