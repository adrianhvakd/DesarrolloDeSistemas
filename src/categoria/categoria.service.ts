import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaEntity } from './entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(CategoriaEntity)
    private categoriasRepository: Repository<CategoriaEntity>,
    ){}
    public async  getAll(){
        return await this.categoriasRepository.find();
    }
    public async  create(cliente){
        let cate=this.categoriasRepository.create(cliente);
        let nuevo = await this.categoriasRepository.save(cate);
        return nuevo;
    }
    public async  getById(id){
        return await this.categoriasRepository.findOne({where:{id:id}});
    }
    public async  update(id,categoria){
        let respuesta =  await this.categoriasRepository.update(id,categoria);
        return respuesta.affected?true:false;
    }
    public async  delete(id){
        let respuesta =  await this.categoriasRepository.softDelete(id);
        return respuesta.affected?true:false;
    }
}
