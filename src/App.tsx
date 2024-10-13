import React, {useState} from 'react';
import {NewComponent} from './site/Test';

type nameButtonType =  'alls' | 'rubles' | 'dollars'


export function App() {

    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: 'a123456789'},
        {banknote: 'dollar', nominal: 50, number: 'b123456789'},
        {banknote: 'ruble', nominal: 100, number: 'c123456789'},
        {banknote: 'dollar', nominal: 100, number: 'd123456789'},
        {banknote: 'dollar', nominal: 50, number: 'e123456789'},
        {banknote: 'ruble', nominal: 100, number: 'f123456789'},
        {banknote: 'dollar', nominal: 50, number: 'j123456789'},
        {banknote: 'ruble', nominal: 50, number: 'h123456789'}
    ])

    const [nameButton, SetNameButton] = useState<nameButtonType>('alls')

    let currentMoney = money

    if (nameButton === 'rubles') {
        currentMoney = money.filter((el) =>
            el.banknote === 'ruble'
        )
    }
    if (nameButton === 'dollars') {
        currentMoney = money.filter((el) =>
            el.banknote === 'dollar'
        )
    }

    const onClickFilterHandler = (currency: nameButtonType) => {
        SetNameButton(currency)
    }

    return (
        <>
            <NewComponent />
{/*            <ul>
                {currentMoney.map((m, index) => {
                    return (
                        <li key={index} style={{listStyle: 'none'}}>
                            <span>{m.banknote}</span>
                            <span>{m.nominal}</span>
                            <span>{m.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('alls')}>all</button>
                <button onClick={() => onClickFilterHandler('rubles')}>ruble</button>
                <button onClick={() => onClickFilterHandler('dollars')}>dollar</button>
            </div>*/}
        </>
    );
}

export default App;