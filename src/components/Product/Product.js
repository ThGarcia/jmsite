import React from 'react';
import './Product.css';
import ProductCard from './ProductCard';

import img1 from '../../assets/TESTPRODUCT.png';
import img2 from '../../assets/bg1.png';
import img3 from '../../assets/bg2.png';
import img4 from '../../assets/posicionado.png';

const Product = () => {
    const productList = [
        {
            productImg: img1,
            productTitle: 'Kit Porta Pronta PET',
            productText: 'porta pronta pet',
            productValue: 200.57,
            hasDiscount: true,
            discountPercentage: 20
        },
        {
            productImg: img2,
            productTitle: 'Kit Porta Pronta PET',
            productText: 'porta pronta pet',
            productValue: 200.57,
            hasDiscount: true,
            discountPercentage: 80
        },
        {
            productImg: img3,
            productTitle: 'Kit Porta Pronta PET',
            productText: 'porta pronta pet',
            productValue: 200.57
        },
        {
            productImg: img4,
            productTitle: 'Kit Porta Pronta PET',
            productText: 'porta pronta pet',
            productValue: 200.57
        },
        {
            productImg: img3,
            productTitle: 'Kit Porta Pronta PET',
            productText: 'porta pronta pet',
            productValue: 200.57,
            hasDiscount: true,
            discountPercentage: 37
        },
        {
            productImg: img4,
            productTitle: 'Kit Porta Pronta PET',
            productText: 'porta pronta pet',
            productValue: 200.57,
            hasDiscount: true,
            discountPercentage: 40
        },
        {
            productImg: img1,
            productTitle: 'Kit Porta Pronta PET',
            productText: 'porta pronta pet',
            productValue: 200.57
        },
        {
            productImg: img2,
            productTitle: 'Kit Porta Pronta PET',
            productText: 'porta pronta pet',
            productValue: 200.57
        },
    ];

    return (
        <>
            <span className='product-title'>Nossos Produtos</span>
            <div className='product'>
                {productList.map((product, index) => (
                    <ProductCard
                        key={index}
                        productImg={product.productImg}
                        productTitle={product.productTitle}
                        productText={product.productText}
                        productValue={product.productValue}
                        hasDiscount={product.hasDiscount}
                        discountPercentage={product.discountPercentage}
                    />
                ))}
            </div>
        </>
    );
};

export default Product;