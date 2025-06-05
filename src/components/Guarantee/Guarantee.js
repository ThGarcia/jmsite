/*import './Guarantee.css';

import GuaranteeCard from './GuaranteeCard';

const Guarantee = () => {
    const award = <i className="ri-award-line"></i>;
    const tools = <i className="ri-tools-line"></i>;
    const truck = <i className="ri-truck-line"></i>;
    const bank = <i className="ri-bank-card-line"></i>;

    return (
        <div className='guarantee'>
            <GuaranteeCard cardIcon={award} cardTitle={'Garantia de Produto'} cardText={'1 ano de garantia para produtos e serviços'} />
            <GuaranteeCard cardIcon={tools} cardTitle={'Instalação Própria'} cardText={'profissionais capacitados e treinados'} />
            <GuaranteeCard cardIcon={truck} cardTitle={'Entrega Garantida'} cardText={'comodidade e garantia de entrega para o cliente'} />
            <GuaranteeCard cardIcon={bank} cardTitle={'Pagamento Facilitado'} cardText={'facilitamos o pagamento, confira'} />
        </div>
    );
};

export default Guarantee;
*/
import React, { useState } from 'react';
import './Guarantee.css';
import GuaranteeCard from './GuaranteeCard';

const Guarantee = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const award = <i className="ri-award-line"></i>;
    const tools = <i className="ri-tools-line"></i>;
    const truck = <i className="ri-truck-line"></i>;
    const bank = <i className="ri-bank-card-line"></i>;
    const cards = [
        <GuaranteeCard key={1} cardIcon={award} cardTitle={'Garantia de Produto'} cardText={'1 ano de garantia para produtos e serviços'} />,
        <GuaranteeCard key={2} cardIcon={tools} cardTitle={'Instalação Própria'} cardText={'profissionais capacitados e treinados pela empresa'} />,
        <GuaranteeCard key={3} cardIcon={truck} cardTitle={'Entrega Garantida'} cardText={'comodidade e garantia de entrega para o cliente'} />,
        <GuaranteeCard key={4} cardIcon={bank} cardTitle={'Pagamento Facilitado'} cardText={'facilitamos o pagamento, confira nossas propostas'} />
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            const screenWidth = window.innerWidth;
            const itemsPerPage = screenWidth >= 769 ? 4 : screenWidth >= 426 ? 2 : 1;
            return (prevIndex + itemsPerPage) % cards.length;
        });
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
            const screenWidth = window.innerWidth;
            const itemsPerPage = screenWidth >= 769 ? 4 : screenWidth >= 426 ? 2 : 1;
            return (prevIndex - itemsPerPage + cards.length) % cards.length;
        });
    };

    const getVisibleCards = () => {
        const screenWidth = window.innerWidth;
        const itemsPerPage = screenWidth >= 769 ? 4 : screenWidth >= 426 ? 2 : 1;
        return cards.slice(currentIndex, currentIndex + itemsPerPage);
    };

    return (

        <div className='guarantee-container'>
            {window.innerWidth < 769 && (
                <button className='carousel-arrow left' onClick={handlePrev}><i className='ri-arrow-left-s-line'></i></button>
            )}
            <div className='guarantee-cards-wrapper'>
                {getVisibleCards()}
            </div>
            {window.innerWidth < 769 && (
                <button className='carousel-arrow right' onClick={handleNext}><i className='ri-arrow-right-s-line'></i></button>
            )}
        </div>
    );
};

export default Guarantee;