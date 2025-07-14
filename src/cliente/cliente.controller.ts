import { Controller, Get, Param, Post, Redirect, Render } from '@nestjs/common';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {
    constructor(private clienteService:ClienteService){}
    //listar
    @Get('')
    @Render('cliente/index')
    async index(){
        let items = await this.clienteService.getAll();
        return {items:items}
    }
    //crear -form
    @Get('/formcliente')
    @Render('cliente/form1')
    form(){}
    //crear -storage
    @Post('')
    create(){}
    //crear -editar
    @Get('/form/:id')
    @Render('cliente/form')
    async formEdit(@Param('id') id: string){
        let item = await this.clienteService.getById(id);
        return item;
    }
    //crear -storage
    @Post('/edit/:id')
    update(){}
    //delete
    @Get('/delete/:id')
    @Redirect('../')
    async delete(@Param('id') id: string) {
        await this.clienteService.delete(id);
        
    }
}
