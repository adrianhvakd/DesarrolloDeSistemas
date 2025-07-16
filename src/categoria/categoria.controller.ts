import { Body, Controller, Get, Param, Post, Render, Res } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Response } from 'express';

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

    async nuevo(@Body() categoria,@Res() res:Response){
        let respuesta = await this.categoriaService.create(categoria);
        if(respuesta)
            return res.redirect('/categoria')
    }

    @Get('/editform/:id')
    @Render('categoria/form')
    editform(@Param() {id}){}

    @Post('/edit/:id')
    edit(@Param() {id},@Body() nuevo){}

    @Get('/delete/:id')
    borrar(@Param() {id}){}
}
