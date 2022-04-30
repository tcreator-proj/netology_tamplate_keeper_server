import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import { Scope } from "../enums/Scope"

@Entity()
export class Token {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column({
        name: "token_key"
    })
    tokenKey: string

    @Column({
        name: "token_value"
    })
    tokenValue: string

    @Column({
        name: "task_name"
    })
    taskName: string

    @Column({
        type: "enum",
        enum: Scope,
        default: Scope.LOCAL,
        name: "var_visiblity"
    })
    varVisiblity: Scope

    @Column()
    deleted: boolean
}
