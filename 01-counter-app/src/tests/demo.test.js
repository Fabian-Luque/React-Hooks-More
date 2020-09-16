

describe('Pruebas en el archivo demo.test.js', () => {
    
    test( 'Deben de ser iguales los strings', () => {

        //1. inicialización
        const mesaje = 'Hola Mundo';
        
        //2. estimulo
        const mesaje2 = `Hola Mundo`;
        
        //3. Observar el comportamiento
        expect( mesaje ).toBe(mesaje2); // ===
    
    });
})
