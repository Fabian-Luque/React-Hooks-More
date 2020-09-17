import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';



describe('Pruebas al componente de CounterAPP', () => {
    let wrapper = shallow( <CounterApp /> );
    
    
    beforeEach( () => {
        wrapper = shallow( <CounterApp /> );
        
    });

    test('debe de mostrar <CounterApp /> correctamente (hacer match con un snapshot) y sus valores por defecto', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar el valor por defecto de 100', () => {
        
        const wrapper = shallow( <CounterApp value={100} /> );

        const textoH2 = wrapper.find('h2').text().trim();

        expect( textoH2 ).toBe('100');

    });

    test('debe de incrementarcon el botón +1', () => {

        const btn1 = wrapper.find('button').at(0).simulate('click');

        const textoH2 = wrapper.find('h2').text().trim();

        expect( textoH2 ).toBe('11');
    
    });

    test('debe de incrementarcon el botón -1', () => {
    
        wrapper.find('button').at(2).simulate('click'); 

        const textoH2 = wrapper.find('h2').text().trim();

        expect( textoH2 ).toBe('9');
    
    });
    
    
    test('deberia de resetear el valor', () => {

        const wrapper = shallow( <CounterApp value={100} /> );


        wrapper.find('button').at(0).simulate('click'); 
        wrapper.find('button').at(0).simulate('click'); 
        wrapper.find('button').at(0).simulate('click'); 
        
        wrapper.find('button').at(1).simulate('click'); 

        const textoH2 = wrapper.find('h2').text().trim();

        expect( textoH2 ).toBe('100');

        
    });
    
    
});
