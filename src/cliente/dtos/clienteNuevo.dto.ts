import { IsInt, IsPositive, Length, Max, Min } from "class-validator";

export class ClienteNuevoDto{
    @Min(10)
    @Max(12)
    @IsInt()
    @IsPositive()
    ci:string;

    @Length(3,30)
    nombre:string;

    @Length(3,30)
    apellidos:string;

    @Min(7)
    @Max(8)
    @IsInt()
    @IsPositive()
    cellular:number;

}