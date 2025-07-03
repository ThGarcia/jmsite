import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import './Admin.css';

import img from '../assets/logo.png';

function LockOverlay({ password, setPassword, onUnlock, showError, inputRef }) {
    return (
        <div className="lockOverlay">
            <h2>Digite a senha para desbloquear</h2>
            <input
                type="password"
                ref={inputRef}
                value={password}
                onChange={e => setPassword(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && onUnlock()}
                placeholder="Senha"
            />
            <button onClick={onUnlock}>Desbloquear</button>
            {showError && <p className="lock-msg">Senha incorreta!</p>}
        </div>
    );
}

function Admin() {
    const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem('unlocked') === 'true');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);
    const passwordInputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!unlocked && passwordInputRef.current) {
            passwordInputRef.current.focus();
        }
    }, [unlocked]);
    
    const handleClick = (type) => {
        navigate(`/${type}`);
    };

    const handleUnlock = () => {
        if (password === 'Jm@42440') {
            setUnlocked(true);
            sessionStorage.setItem('unlocked', 'true');
            setShowError(false);
        } else {
            setShowError(true);
        }
    };

    return (
        <div className="admin-container">
            {!unlocked && (
                <LockOverlay
                    password={password}
                    setPassword={setPassword}
                    onUnlock={handleUnlock}
                    showError={showError}
                    inputRef={passwordInputRef}
                />
            )}
            <div className={`content${!unlocked ? ' locked' : ''}`}>
                <div className="admin-header">
                    <img src={img} alt="Logo" className="admin-logo" />
                    <h1 className="admin-title">JM CARPINTARIA</h1>
                </div>
                <div className='admin-button'>
                    <button onClick={() => handleClick("")}>HOME</button>
                    <button onClick={() => handleClick("error")}>ERROR</button>
                    <button onClick={() => handleClick("quote")}>ORÇAMENTO</button>
                    <button className="admin-button">BOTÃO 01</button>
                    <button className="admin-button">BOTÃO 02</button>
                    <button className="admin-button" onClick={
                        () => {
                            setUnlocked(false);
                            sessionStorage.removeItem('unlocked');
                        }
                    }>DESLOGAR</button>
                </div>
            </div>
        </div>
    );
};
export default Admin;
