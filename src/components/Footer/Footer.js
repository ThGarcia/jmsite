import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-local'>
                    <a href='https://maps.app.goo.gl/T1EWxPEsEsTMcjzH9' target='_blank' rel='noopener noreferrer'>
                        <span><i className='ri-map-pin-line'></i></span>
                        <span>Jm Carpintaria</span>
                    </a>
                </div>
                <div className='footer-contact'>
                    <a href='https://www.facebook.com/JmCarpintaria' target='_blank' rel='noopener noreferrer'>
                        <span><i className='ri-facebook-box-line'></i></span>
                    </a>
                    <a href='https://www.instagram.com/jmcarpintaria/' target='_blank' rel='noopener noreferrer'>
                        <span><i className='ri-instagram-line'></i></span>
                    </a>
                    <a href='mailto:contato@jmcarpintaria.com.br?subject=Contato%20por%20site&body=Olá,%20tenho%20interesse%20em%20mais%20informações.'>
                        <span><i className='ri-mail-line'></i></span>
                    </a>
                    <a href='https://api.whatsapp.com/send?phone=5547992192731&text=Olá,%20tenho%20interesse%20em%20mais%20informações.' target='_blank' rel='noopener noreferrer'>
                        <span><i className='ri-whatsapp-line'></i></span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
