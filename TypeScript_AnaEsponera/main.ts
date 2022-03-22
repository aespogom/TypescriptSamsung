// ANA ESPONERA GOMEZ PRACTICA TYPESCRIPT 2022

// Ejecutar el archivo: 
// 1º: Colocarse en el directorio TypeScript_AnaEsponera
// 2º: npm install
// 2º: npx ts-node main.ts

import { Persona } from './clases/persona'
import Utilities from './utilities';


// Se crea un array con 3 personas
let personas: Array<Persona> = [new Persona(), new Persona(), new Persona()];

// Se imprimen los datos en la terminal de la consola
personas.forEach((p: Persona, index: number) => {
    console.log('Persona número ', index+1 , p)
});

// Se modifican los datos de una de las personas basandose en el DNI
Utilities.search_by_DNI(personas);




