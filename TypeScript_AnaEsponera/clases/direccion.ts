// ANA ESPONERA GOMEZ PRACTICA TYPESCRIPT 2022

import { DIRECCIONES } from "../constants/direcciones";
import Utilities from "../utilities";


export class Direccion {
    
    calle: string;
    numero: number;
    piso: number;
    letra: string;
    codigo_postal: number;
    poblacion: string;
    provincia: string;

    constructor(){
        
        this.calle = this.getRandomDireccion(DIRECCIONES.calle);
        this.numero = Utilities.getRandomNumber(99,1);
        this.piso = Utilities.getRandomNumber(10,1);
        this.letra = Utilities.getRandomString(1);
        this.codigo_postal = Utilities.getRandomNumber(99999,10000);
        this.provincia = this.getRandomDireccion(DIRECCIONES.provincia);
        this.poblacion = this.getRandomDireccion(DIRECCIONES.poblacion, this.provincia);
        
    }

    getRandomDireccion(array_input: any, sub_name?: string): string {
        let array_find: Array<string> = [];
        if (sub_name){
            array_find = array_input[sub_name.replace(' ', '_')];
        } else {
            array_find = array_input;
        }
        const max = array_find.length;
        const index: number = Math.floor(Math.random() * max);
        return array_find[index]
    }

}