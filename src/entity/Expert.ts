import { Entity, PrimaryColumn, Column } from "typeorm"

@Entity({
    schema: "netology_keeper"
})
export class Expert {

    @PrimaryColumn()
    email: string

    @Column()
    expert_id: number

    @Column({
        name: "first_name"
    })
    firstName: string

    @Column()
    surname: string  

}
