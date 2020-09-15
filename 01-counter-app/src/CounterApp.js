
import React, { useState } from "react";
import PropTypes from "prop-types"
const CounterApp = ({value = 10}) => {


    const [ counter, setCounter ] = useState( value  );
    // const [ nombre, setNombre ] = useState('Goku');
    // console.log(nombre, setNombre);
    // console.log(state[1]());



    // handleAdd
    const handleAdd = (e) => setCounter( counter +1 );
    
    const handleSubstract = (e) => setCounter( counter -1);
    
    const handleRestart = (e) => setCounter( value );
    



    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleRestart }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    );



}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;