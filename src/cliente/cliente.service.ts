import { Injectable } from '@nestjs/common';
import { ClienteEntity } from './entities/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {

    constructor(@InjectRepository(ClienteEntity)
    private ClienteRepository: Repository<ClienteEntity>)
    {}

    public async getAll(){
        return await this.ClienteRepository.find();
    }
    public async createc(cliente){
        let clienteDb = await this.ClienteRepository.create(cliente);
        let  newCliente = await this.ClienteRepository.save(clienteDb);
        return newCliente;
    }
    public async edit(cliente,id){
        let respuesta = await this.ClienteRepository.update({id:id},cliente);
        return respuesta.affected??0>=1?true:false

    }
    public async delete(id: string): Promise<boolean> {
        let respuesta = await this.ClienteRepository.softDelete(id);
        return (respuesta.affected ?? 0) >= 1;
    }
    public async getById(id: string): Promise<ClienteEntity | null> {
        return await this.ClienteRepository.findOne({ where: { id } });
    }

}
