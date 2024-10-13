import React, {useState} from 'react';
import {ArrayCars, NewComponent} from './components/NewComponent';

function App() {

    const topCars: ArrayCars[] = [
        {manufacturer: 'BMW', model: 'X5'},
        {manufacturer: 'Mersedes', model: 'MLS'},
        {manufacturer: 'Audi', model: 'Q7'}
    ]

    return (
        <NewComponent cars={topCars}/>
    );
}

export default App;