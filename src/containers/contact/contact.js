import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contact.scss';

import { db } from '../../services/firebase';
import contactItemsList from '../../data/brands.json';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '', creation_date: null });
    const [visibleForm, setvisibleform] = useState(true);

    const handleChange = (ev) => {
        ev.persist();
        setForm((form) => ({ ...form, [ev.target.name]: ev.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let creationdate = new Date();

        try {
            let response = await db.ref('messages').push({
                name: form.name,
                email: form.email,
                message: form.message,
                creation_date: creationdate.toString(),
            });

            response.then(setvisibleform(false));
        } catch (error) {
            console.log(error.description);
        }
    };

    return (
        <section id="contact" className="anchor">
            <div className="page-container">
                <div className="section-header">
                    <h2 className="dark">Contact</h2>
                    <FontAwesomeIcon icon={['fas', 'address-book']} className="section-logo" />
                </div>

                <div className="contact-row">
                    <div className="contact-column-form">
                        {visibleForm ? (
                            <form
                                method="post"
                                title="To contact me, please fill in the following form and write me a comment and I will be glad to answer you soon."
                                onSubmit={handleSubmit}
                            >
                                <div className="rddow">
                                    <div>
                                        <div>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Name"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Email"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                name="message"
                                                id="message"
                                                placeholder="Message"
                                                rows="4"
                                                value={form.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                    <input type="submit" className="button" value="Send"></input>
                                </div>
                            </form>
                        ) : (
                            <div className="contact-response">
                                <FontAwesomeIcon icon={['far', 'check-circle']} />
                                <p>Thanks for contact me, I&apos;ll be in touch soon!</p>
                            </div>
                        )}
                    </div>

                    <div className="contact-column">
                        <div className="contact-channels">
                            {contactItemsList
                                .filter((item) => item.isBrand)
                                .map((item) => (
                                    <div className="contact-channel" key={item.id.toString()}>
                                        <div className="contact-channel-icon">
                                            <a href={item.url} target="_blank" title={item.label} rel="noreferrer">
                                                <FontAwesomeIcon icon={[item.iconFamily, item.icon]} key={item.id} />
                                            </a>
                                        </div>
                                        <div className="contact-channel-text">
                                            <a href={item.url} target="_blank" title={item.label} rel="noreferrer">
                                                {item.text}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
