import React, {useState} from 'react';

function Input() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <input className="input" type="text" placeholder="E-posta adresinizi giriniz." value={email}
                   onChange={e => setEmail(e.target.value)}/>
            <input className="input" type="password" placeholder="Parolanızı giriniz." value={password}
                   onChange={e => setPassword(e.target.value)}/>

        </>
    );
}

export default Input;
