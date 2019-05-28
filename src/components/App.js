import Component from './Component.js';
import Header from './Header.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        //this renders Header
        const header = new Header();
        const headerDOM = header.render();

        //this renders App/Main
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);


        return dom;
    }



    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                    <ul class="futurama-list">
                        <li class="futurama-item">
                            <h2>Dr Zoidberg</h2>
                            <img src="https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png" alt="Dr Zoidberg">
                            <blockquote>"I don't like the looks of this doctor. I bet I've lost more patients than he's\neven treated."</blockquote>
                        </li>
                        <li class="futurama-item">
                            <h2>Dr Zoidberg</h2>
                            <img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904014/Dr_John_Zoidberg.png" alt="Dr Zoidberg">
                            <blockquote>"...it's what seperates humans and robots from animals and animal robots."</blockquote>
                        </li>
                        <li class="futurama-item">
                            <h2>Dr Zoidberg</h2>
                            <img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904047/calculon.jpg" alt="Dr Zoidberg">
                            <blockquote>"...it's what seperates humans and robots from animals and animal robots."</blockquote>
                        </li>
                    </ul>
                </main>
            </div>
        `;
    }
}

export default App;