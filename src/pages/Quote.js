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
            </div >
            <Button onCLick={handleClick} text='TESTE' />
        </>
    );
}

export default Quote;
