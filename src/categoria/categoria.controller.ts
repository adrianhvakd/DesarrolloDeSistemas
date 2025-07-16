import { Body, Controller, Get, Param, Post, Redirect, Render, Res } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Response } from 'express';
import { nuevoCategoriadto } from './dtos/nuevoCategoria.dto';

@Controller('categoria')
export class CategoriaController {
    constructor(
        private categoriaService:CategoriaService
    ){}
    @Get('')
    @Render('categoria/index')
    async index(){
        return {items:await this.categoriaService.getAll()};
    }

    @Get('/formnuevo')
    @Render('categoria/form')
    nuevoform(){ }

    @Post('')
    async nuevo(@Body() categoria:nuevoCategoriadto,@Res() res:Response){
        let respuesta = await this.categoriaService.create(categoria);
        if(respuesta)
            return res.redirect('/categoria')
    }

    @Get('/editform/:id')
    @Render('categoria/form')
    async editform(@Param() {id}){
        let respuesta = await this.categoriaService.getById(id);
        return respuesta;
    }

    @Post('/edit/:id')
    async edit(@Param() {id},@Body() nuevo:nuevoCategoriadto,@Res() res:Response){
        let respuesta = await this.categoriaService.update(id,nuevo);
        if(respuesta)
            return res.redirect('/categoria')
    }

    @Get('/delete/:id')
    @Redirect('/categoria/')
    async borrar(@Param() {id}){
        let respuesta = await this.categoriaService.delete(id);
        
    }
}
