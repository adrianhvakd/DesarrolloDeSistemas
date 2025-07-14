import { Controller, Get, Param, Post, Render } from '@nestjs/common';
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
    @Render('cliente/form')
    form(){}
    //crear -storage
    @Post('')
    create(){}
    //crear -editar
    @Get('/formclienteedit')
    @Render('cliente/form')
    formEdit(){}
    //crear -storage
    @Post('/edit/:id')
    update(){}
    //delete
    @Get('/delete/:id')
    async delete(@Param('id') id: string) {
        await this.clienteService.delete(id);
    }
}
