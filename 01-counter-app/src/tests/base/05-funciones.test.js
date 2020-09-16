import '@testing-library/jest-dom'

import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('05-funciones.js', () => {
    
    test('getUser debe de retornar un objeto ', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        
        const user = getUser();

        // console.log(user);

        expect( user ).toEqual( userTest )
    })
    
    test('getUsuarioActivo debe retornar un objeto', () => {
        const username = 'Kzelly';

        const userTest = {
            uid: 'ABC567',
            username: username
        }

        const user = getUsuarioActivo( username );

        expect( user ).toEqual( userTest );
    })
    
    
})
