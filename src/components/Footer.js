import React from 'react';
import { Button } from './Button'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subription-heading">
                    Bem vindo
                </p>

            </section>
            <p className="footer-subscription-text">
                sem
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                    <Button buttonStyle="btn--outline">Subscribe</Button>
                </form>


            </div>
        </div>
    )
}

export default Footer
