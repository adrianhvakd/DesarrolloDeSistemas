import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('categoria')
export class CategoriaEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({type:'varchar',length:50})
    nombre:string

    @Column({type:'varchar',length:50})
    foto:string

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @DeleteDateColumn()
    deletedAt:Date;
}