import { Entity, PrimaryColumn, Column } from "typeorm"

@Entity()
export class Expert {

    @PrimaryColumn()
    email: string

    @Column("first_name")
    firstName: string

    @Column()
    surname: string  

}
