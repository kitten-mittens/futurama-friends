import Component from './Component.js';
import Header from './Header.js';
import FuturamaList from '../components/FuturamaList.js';
import api from '../services/futurama-api.js';
import Loading from './Loading.js';
import ErrorDisplay from './ErrorDisplay.js';

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

        //This renders loading page
        const loading = new Loading({ loading: false });
        main.appendChild(loading.render());

        const errorDisplay = new ErrorDisplay({ error: '' });
        main.appendChild(errorDisplay.render());

        function loadFriends() {
            const params = window.location.hash.slice(1);

            const searchParams = new URLSearchParams(params);
            const search = searchParams.get('search');

            loading.update({ loading: true });

            api.getFriends(search)
                .then(friends => {
                    futuramaList.update({ friends });
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    loading.update({ loading: false });
                });
            
        }

        loadFriends();

        window.addEventListener('hashchange', () => {
            loadFriends();
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