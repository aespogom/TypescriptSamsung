// ANA ESPONERA GOMEZ PRACTICA TYPESCRIPT 2022

import { NAMES } from "../constants/names";
import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";
import  Utilities from "../utilities"
import { NOTAS } from "../constants/notas";
import { COLORES } from "../constants/colores";


export class Persona {
    
    nombre: string;
    apellidos: Array<string>;
    edad: number;
    dni: string;
    cumpleaños: Date;
    color_favorito: string;
    sexo: string;
    direcciones: Direccion;
    mails: Mail;
    telefonos: Telefono;
    notas: string;

    constructor(){

        this.sexo = Utilities.getRandomGender();
        this.nombre = NAMES[this.sexo][Utilities.getRandomNumber(95)];
        this.apellidos = [];
        for (let i: number = 0; i < 2; i++ ) {
            this.apellidos[i] = NAMES.apellidos[Utilities.getRandomNumber(97)];
        }
        this.cumpleaños = Utilities.getRandomFecha();
        this.edad = new Date().getFullYear() - this.cumpleaños.getFullYear();
        this.dni = Utilities.getRandomNumber(99999999,10000000).toString() + Utilities.getRandomString(1);
        this.color_favorito = COLORES[Utilities.getRandomNumber(36)];
        this.direcciones = new Direccion();
        this.mails = new Mail(this.nombre, this.apellidos);
        this.telefonos =  new Telefono();
        this.notas = NOTAS[this.sexo][Utilities.getRandomNumber(8)];;
    }

    modify_p_by_DNI(): Persona {
        this.direcciones = new Direccion();
        this.telefonos = new Telefono();
        this.mails = new Mail(this.nombre, this.apellidos);
        return this
    }
    
}