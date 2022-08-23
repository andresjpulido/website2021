import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactItemsList from '../../data/contactItems.json';
import './home.scss';

export default function Home() {
    const mainContactItems = contactItemsList
        .filter(function (element) {
            return element.isBrand;
        })
        .map((item) => (
            <li key={item.id.toString()} className="main-networks">
                <a href={item.url} target="_blank" rel="noreferrer" title={item.label}>
                    <FontAwesomeIcon
                        className="icon-active"
                        icon={[item.iconFamily, item.icon]}
                        key={item.id}
                        size="lg"
                    />
                </a>
            </li>
        ));

    return (
        <section id="home" className="anchor">
            <div>
                <p className="title">
                    Hi, <br />
                    I&apos;m Andres Pulido,
                    <br />
                    Software developer
                    <br />
                    <span className="home-h2">Web development / J2EE / SPA Applications</span>
                </p>
            </div>
            <div id="social-networks">
                <ul>{mainContactItems}</ul>
            </div>
        </section>
    );
}
