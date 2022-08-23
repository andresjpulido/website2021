import React, { Component } from 'react';

import './App.scss';

import Contact from './containers/contact';
import About from './containers/about';
import MyWork from './containers/mywork';
import Nav from './components/nav';
import Footer from './components/footer';
import Home from './containers/home';
import Experience from './containers/experience';
import menu from './data/menu.json';
import brands from './data/brands.json';
import Coda from './components/coda';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            transform: 0,
            menu: menu,
            brands: brands,
        };

        this.handler = this.handlerItemMenu.bind(this);
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll = () => {
        /*
        let scrollTop = event.srcElement.body.scrollTop;
        let itemTranslate = Math.min(0, scrollTop / 3 - 60);
    */
        this.setState({ transform: window.scrollY });

        let aboutTop = 0;
        if (document.getElementById('about')) aboutTop = document.getElementById('about').offsetTop;

        let experienceTop = 0;
        if (document.getElementById('experience')) experienceTop = document.getElementById('experience').offsetTop;

        let myworkTop = 0;
        if (document.getElementById('mywork')) myworkTop = document.getElementById('mywork').offsetTop;

        let contactTop = 0;
        if (document.getElementById('contact')) contactTop = document.getElementById('contact').offsetTop;

        let id = 0;
        let scrollY = parseInt(window.scrollY, 10);

        if (scrollY < aboutTop) id = 1;

        if (scrollY >= aboutTop - 5 && scrollY < experienceTop) id = 2;

        if (scrollY >= experienceTop - 5 && scrollY < myworkTop) id = 3;

        if (scrollY >= myworkTop - 5 && scrollY < contactTop) id = 4;

        if (scrollY >= contactTop - 5) id = 5;

        this.handlerItemMenu(null, id);
    };

    handlerItemMenu = (e, id) => {
        let oldList = this.state.menu;

        const newList = oldList.map((item) => {
            if (item.id === id) {
                let updatedItem = {
                    ...item,
                    isActive: true,
                };

                return updatedItem;
            } else {
                let updatedItem = {
                    ...item,
                    isActive: false,
                };

                return updatedItem;
            }
        });

        this.setState({ menu: newList });
    };

    render() {
        return (
            <div>
                <Nav menu={this.state.menu} t={this.state.transform} handler={this.handlerItemMenu} />

                <article>
                    <Home />
                    <About />
                    <Experience />
                    <MyWork />
                    <Coda />
                    <Contact />
                    <Footer />
                </article>
            </div>
        );
    }
}
