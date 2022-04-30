import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import {Expert} from "../entity/Expert";
class ExpertRepository {
    private expertRepository: Repository<Expert>;
    constructor() {
        this.expertRepository = AppDataSource.getRepository(Expert);
    }

    public async getAll(): Promise<Expert[]> {
        const expert: Expert[] = await this.expertRepository.find();
        return expert;
    }

    public async getExpert(email: string): Promise<Expert> {
        const expert: Expert = await this.expertRepository.findOneBy({email});
        return expert;
    }
}

export const expertRepository: ExpertRepository = new ExpertRepository();

