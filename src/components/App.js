import Component from './Component.js';
import Header from './Header.js';
import FuturamaList from '../components/FuturamaList.js';
import api from '../services/futurama-api.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        //this renders Header
        const header = new Header();
        const headerDOM = header.render();

        //this renders App/Main
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        // this renders main list
        const futuramaList = new FuturamaList({ friends: [] });
        main.appendChild(futuramaList.render());

        api.getFriends()
            .then(friends => {
                futuramaList.update({ friends });
            })
            .catch(err => {
                console.log(err);
            });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;