import './Guarantee.css';

const GuaranteeCard = ({cardIcon, cardTitle, cardText}) => {
    return (
        <div className='guarantee-card'>
            <span className='guarantee-card-icon'>{cardIcon}</span>
            <div className='guarantee-card-description'>
                <span className='guarantee-card-title'>{cardTitle}</span>
                <span className='guarantee-card-text'>{cardText}</span>
            </div>
        </div>
    );
};

export default GuaranteeCard;
