import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './coda.scss';
export default function Coda() {

    return (
        <section className="anchor dark-page">
            <div className="page-container">

                <div className="footer-sentence">
                    Looking for new challenges and learning
                    <br /><br />
                    <FontAwesomeIcon className="footer-sentence-icon" icon={["fas", "cogs"]} />

                </div>

                <div className="footer-line" />
            </div>
        </section>
    )
}