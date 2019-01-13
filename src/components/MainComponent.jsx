import React, { Component } from 'react';
import '../style/MainComponent.css';

import $ from 'jquery';

class Maincomponent extends Component {

    componentDidMount() {
        this.smoothScroll();
        window.addEventListener('scroll', this.scrollEffect);
    }

    smoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
        
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        window.onscroll = function(ev) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {

                document.querySelector('footer').classList.add('show-footer');
                document.querySelector('footer').classList.remove('hide-footer');
                let time = 500;
                    document.querySelector('#js').classList.add('show-flex-icons');
                this.setTimeout(() => {
                    document.querySelector('#css').classList.add('show-flex-icons');
                }, time * 2);
                this.setTimeout(() => {
                    document.querySelector('#html').classList.add('show-flex-icons');
                }, time * 3);
                this.setTimeout(() => {
                    document.querySelector('#react').classList.add('show-flex-icons');
                }, time * 4);
                this.setTimeout(() => {
                    document.querySelector('#wp').classList.add('show-flex-icons');
                }, time * 5);
                this.setTimeout(() => {
                    document.querySelector('#php').classList.add('show-flex-icons');
                }, time * 6);

                this.setTimeout(() => {
                    document.querySelector('#laravel').classList.add('show-flex-icons');
                }, time * 7);

            }
        }
    }

    scrollEffect = () => {
        $('#splash-background').css('transform', 'translateY(' + $(document).scrollTop() / 8 + 'px');
    }


    render(){
        return(
            <div>
                <div id="container">
                <div id="title-wrapper">
                    <h1 id="title">Annie Strandberg</h1>
                        <p>Front End Developer</p>
                </div>
                <div id="column-left"></div>
                <div id="column-right"></div>
                <a href="#bottom" className="scroll-down"><i class="fas fa-angle-double-down"></i></a>
                </div>
                <div id="bottom-page">
                <div id="splash-background">
                <div id="icons-wrapper">
                    <div id="js" class="flex-icons">
                    <i class="fab fa-js"></i>

                    </div>
                    <div id="css" class="flex-icons">
                    <i class="fab fa-css3-alt"></i>

                    </div>
                    <div id="html" class="flex-icons">
                    <i class="fab fa-html5"></i>

                    </div>
                    <div id="react" class="flex-icons">
                    <i class="fab fa-react"></i>

                    </div>
                    <div id="wp" class="flex-icons">
                    <i class="fab fa-wordpress"></i>

                    </div>
                    <div id="php" class="flex-icons">
                    <i class="fab fa-php"></i>

                    </div>
                    <div id="laravel" class="flex-icons">
                    <i class="fab fa-laravel"></i>

                    </div>
                    </div>
                </div>
                <footer id="bottom">
                    <div>
                        <a target="_blank" href="tel:+46761607701"><i class="fas fa-mobile"></i></a>
                        <a target="_blank" href="mailto:aanniestrandberg@live.se"><i class="fas fa-at"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/in/annie-strandberg-43547b15b/"><i class="fab fa-linkedin-in"></i></a>
                        <a target="_blank" href="https://github.com/anniestrandberg"><i class="fab fa-github"></i></a>
                        
                      
                    </div>
                </footer>
                </div>
            </div>
        )
    }
}

export default Maincomponent;
