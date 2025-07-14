import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('cliente')
export class ClienteEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column({type:'varchar',length:10})    
    ci:string
    @Column({type:'varchar',length:100})
    nombre:string
    @Column({type:'varchar',length:100})
    apellidos:string
    @Column({type:'bigint'})
    cel:string
    @CreateDateColumn()
    createAt:Date;
    @UpdateDateColumn()
    updateAt:Date;
    @DeleteDateColumn()
    deleteAt:Date;
}