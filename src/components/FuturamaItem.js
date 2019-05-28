import Component from '../components/Component.js';

class FuturamaItem extends Component {

    renderTemplate() {
        const friend = this.props.friend;
        return /*html*/ `
            <li class="futurama-item">
                <h2>${friend.character}</h2>
                <img src="${friend.image}" alt="${friend.character}">
                <blockquote>"${friend.quote}"</blockquote>
            </li>
        `;
    }

}

export default FuturamaItem;