import React, {useState} from 'react';
import {FullInput} from './components/FullInpunt';
import {Input} from './components/Input';
import {Button} from './components/Button';


export function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'}
        ]
    )

    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className="App">
            {/*            <FullInput addMessage={addMessage}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}