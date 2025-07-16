import { Length } from "class-validator";

export class nuevoCategoriadto{
    @Length(3,50,{message: "Nombre: El nombre debe estar en un rango de 3-50 caracteres"})
    nombre:string;

    foto:string;

}