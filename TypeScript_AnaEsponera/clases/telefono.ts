// ANA ESPONERA GOMEZ PRACTICA TYPESCRIPT 2022

import Utilities from "../utilities";


export class Telefono {
    
    tipo: string;
    numero: number;

    constructor(){
        this.tipo = Utilities.getRandomTipo('telefono');
        this.numero = Utilities.getRandomNumber(999999999,600000000);
    }

    
}