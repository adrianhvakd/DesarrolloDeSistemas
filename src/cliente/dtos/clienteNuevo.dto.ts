import { IsInt, IsPositive, Length, Matches, Max, Min } from "class-validator";

export class ClienteNuevoDto{

    @Length(7,12, { message: "El ci: Debe tener un tamaño entre 7-12 digitos"})
    @Matches(/^[1-9][0-9]*$/, { message: "El ci: Debe contener solo números y no empezar con 0" })
    ci:string;

    @Length(3,30, { message: "El nombre: Debe tener un tamaño entre 3-30 caracteres"})
    nombre:string;

    @Length(3,30, { message: "Los apelldios: Deben tener un tamaño entre 3-30 caracteres"})
    apellidos:string;

    @Length(7,8, { message: "El celular: Debe tener un tamaño entre 7-8 digitos"})
    @Matches(/^[1-9][0-9]*$/, { message: "El celular: Debe contener solo números y no empezar con 0" })
    cel:string;

}