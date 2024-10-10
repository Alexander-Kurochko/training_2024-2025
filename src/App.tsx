import './App.css';
import {MouseEvent, useState} from 'react';
import {NewComponent} from './components/NewComponent';

function App() {
    /*    debugger*/
    type FilterPropsType = 'all' | 'ruble' | 'dollar'

    const [money, setMoney] = useState([
        {banknote: 'Dollars ', nominal: 100, number: ' a1234567890'},
        {banknote: 'Dollars ', nominal: 50, number: ' z1234567890'},
        {banknote: 'Ruble ', nominal: 100, number: ' w1234567890'},
        {banknote: 'Dollars ', nominal: 100, number: ' e1234567890'},
        {banknote: 'Dollars ', nominal: 50, number: ' c1234567890'},
        {banknote: 'Ruble ', nominal: 100, number: ' r1234567890'},
        {banknote: 'Dollars ', nominal: 50, number: ' x1234567890'},
        {banknote: 'Ruble ', nominal: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterPropsType>('all')

    let currentMoney = money

    if (filter === 'ruble') {
        currentMoney = money.filter((filteredMoney, index) => filteredMoney.banknote === 'Ruble ')
    } else if (filter === 'dollar') {
        currentMoney = money.filter((filteredMoney, index) => filteredMoney.banknote === 'Dollars ')
    }

    const onClickFilterHandler = (nameButton: FilterPropsType) => {
        setFilter(nameButton)
    }


    return (
          <NewComponent/>
       /* <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('all')}>All</button>
                <button onClick={() => onClickFilterHandler('ruble')}>Ruble</button>
                <button onClick={() => onClickFilterHandler('dollar')}>Dollars</button>
            </div>
        </>*/
    )

}

export default App;
