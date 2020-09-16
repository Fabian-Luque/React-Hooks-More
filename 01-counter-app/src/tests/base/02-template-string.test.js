import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";

describe('Pruebas de 02-template-string.js ', () => {
    
    test('Prueba en el método getSaludo, debe retornar Hola Fabian!', () => {
           
        const nombre = 'Fabian';

        const saludo = getSaludo( nombre );
        // console.log(saludo);
        expect( saludo ).toBe( 'Hola '+ nombre + '!');

    })
    
    // get Saludo debe de retornar Hola Carlos! Si no hay argumento nombre
    test('Debe de retornar Hola Carlos! si no hay argumento nombre', () => {
        
        const saludo = getSaludo();
        expect( saludo ).toBe( 'Hola Carlos!' );
        
    })
    

})
