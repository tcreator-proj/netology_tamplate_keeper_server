import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import {Expert} from "../entity/Expert";

export default class ExpertRepository {
    private expertRepository: Repository<Expert>;
    constructor() {
        this.expertRepository = AppDataSource.getRepository(Expert);
    }

    public async getAll(): Promise<Expert[]> {
        const expert: Expert[] = await this.expertRepository.find();
        return expert;
    }
}