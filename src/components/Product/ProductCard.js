import './Product.css';

const ProductCard = ({ productImg, productTitle, productText, productValue, hasDiscount = false, discountPercentage }) => {
    const discountedPrice = productValue * (1 - discountPercentage / 100);

    return (
        <div className='product-card'>
            {hasDiscount && (
                <div className='discount-badge'>
                    {discountPercentage}%
                </div>
            )}
            <img className='product-card-img' src={productImg} alt='' />
            <div className='product-card-description'>
                <span className='product-card-title'>{productTitle}</span>
                <span className='product-card-text'>{productText}</span>
                <div className='price-container'>
                    {hasDiscount ? (
                        <>
                            <span className='original-price'>
                                R$ {productValue.toFixed(2)}
                            </span>
                            <span className='discounted-price'>
                                R$ {discountedPrice.toFixed(2)}
                            </span>
                        </>
                    ) : (
                        <span className='product-card-value'>
                            R$ {productValue.toFixed(2)}
                        </span>
                    )}
                </div>
                <button className='product-card-button'>Comprar</button>
            </div>
        </div>
    );
};

export default ProductCard;
