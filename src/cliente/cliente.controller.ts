import { Body, Controller, Get, Param, Post, Redirect, Render, Res } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Response } from 'express';
import { ClienteNuevoDto } from './dtos/clienteNuevo.dto';

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
    async create(@Body() cliente:ClienteNuevoDto,@Res() res:Response){
        let respuesta = await this.clienteService.createc(cliente)
        if(respuesta)
            return res.redirect('/cliente')
        else
            return res.redirect('/cliente/formcliente')
    }
    //crear -editar
    @Get('/formedit/:id')
    @Render('cliente/form')
    async formEdit(@Param('id') id: string){
        let item = await this.clienteService.getById(id);
        return item;
    }
    //crear -storage
    @Post('/edit/:id')
    async update(@Body() updateCliente, @Param('id') id:string, @Res() res:Response){
        let respuesta = await this.clienteService.edit(updateCliente,id);
        if(respuesta)
            return res.redirect('/cliente/')
        else{
            //mostrar el error
        }    
            
    }
    //delete
    @Get('/delete/:id')
    @Redirect('/cliente')
    async delete(@Param('id') id: string) {
        let result = await this.clienteService.delete(id);
        
    }
}
