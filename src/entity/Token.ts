import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import { Visible } from "./Visible"

@Entity()
export class Token {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column("token_key")
    tokenKey: string

    @Column("token_value")
    tokenValue: string

    @Column("task_name")
    taskName: string

    @Column({
        type: "enum",
        enum: Visible,
        default: Visible.LOCAL,
        name: "var_visiblity"
    })
    varVisiblity: Visible

    @Column()
    deleted: boolean
}
