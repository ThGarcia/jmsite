import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import './Quote.css';

function Quote() {
    function handleClick() {
        return alert('botaõ clicado!!');
    }

    return (
        <>
            <div className='quote'>
                <div className='quote-header'>
                    <Button text='<' />
                    <h2>ORÇAMENTO</h2>
                    <Button text='X' />
                </div>
                <div className='form-group'>
                    <Input label='Product' name='product' type='text' />
                    <div className='product-value'>
                        <Input label='QTD' name='qtd' type='number' />
                        <Input label='Preço' name='value' type='number' isCurrency />
                        <Input label='Total' name='totalValue' type='number' isCurrency />
                        <Input label='Novo Preço' name='newValue' type='number' isCurrency />
                        <Button text='+' />
                    </div>
                </div>
                {/*<form className='quote-form'>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' id='name' name='name' required />
                    <div className='product-value'>
                        <label htmlFor='qtd'>QTD</label>
                        <input type='number' id='qtd' name='qtd' required />
                        <label htmlFor='value'>Preço</label>
                        <input type='number' id='value' name='value' required />
                        <label htmlFor='totalValue'>Valor Total</label>
                        <input type='number' id='totalValue' name='totalValue' required />
                        <label htmlFor='newValue'>Novo Valor</label>
                        <input type='number' id='newValue' name='newValue' required />
                        <button>+</button>
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' id='name' name='name' required />
                    <label htmlFor='email'>E-mail</label>
                    <input type='email' id='email' name='email' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='service'>Serviço</label>
                    <select id='service' name='service' required>
                        <option value='web-development'>Desenvolvimento Web</option>
                        <option value='mobile-app'>Aplicativo Móvel</option>
                        <option value='seo'>SEO</option>
                        <option value='marketing-digital'>Marketing Digital</option>
                    </select>
                </div>
                <button type='submit'>Enviar Orçamento</button>
            </form>*/}
            </div >
            <Button onCLick={handleClick} text='TESTE' />
        </>
    );
}

export default Quote;
