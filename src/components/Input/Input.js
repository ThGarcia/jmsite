import './Input.css';

function Input({ label, name, type, isCurrency }) {
    return (
        <div className='input'>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                autoComplete="off"
                className={isCurrency ? 'currency' : ''}
            />
            {isCurrency && <p>R$</p>}
        </div>
    );
}

export default Input;
