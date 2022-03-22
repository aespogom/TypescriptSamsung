// ANA ESPONERA GOMEZ PRACTICA TYPESCRIPT 2022

import Utilities from "../utilities";


export class Mail {
    
    tipo: string;
    direccion: string;

    constructor(nombre: string, apellidos: Array<string>){
        this.tipo = Utilities.getRandomTipo('mail');
        this.direccion = this.getMailAddress(nombre,apellidos);
    }

    getMailAddress(nombre: string, apellidos: Array<string>): string {
        let mail: string = nombre.toLowerCase().replace(' ','');
        apellidos.forEach((ap: string) => {
            mail = mail.concat(ap.toLowerCase())
        });
        mail = mail.concat(Utilities.getRandomTipo('sufijo_mail'));
        return mail

    }
}