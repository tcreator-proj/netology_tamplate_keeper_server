import { Expert } from "../entity/Expert";
import { expertRepository } from "../repository/ExpertRepository";
import { tokenRepository } from "../repository/TokenRepository";

export class ExpertOperations {
    constructor() {}

    public async hasExpertToBase(email: string): Promise<boolean> {
        const expert: Expert = await expertRepository.getExpert(email);
        console.log(expert)
        return !!expert;
    } 

}