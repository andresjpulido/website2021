import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactItemsList from '../data/contactItems.json';

export default function ContactItems() {
    return (
        <div className="footer-networks">
            {contactItemsList.map((item) => (
                <div className="item-footer-networks" key={item.id.toString()}>
                    <a href={item.url} target="_blank" title={item.label}>
                        <FontAwesomeIcon icon={[item.iconFamily, item.icon]} key={item.id} />
                        <span className="dadrk">{item.text}</span>
                    </a>
                </div>
            ))}
        </div>
    );
}
