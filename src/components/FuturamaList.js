import Component from './Component.js';
import FuturamaItem from './FuturamaItem.js';

class FuturamaList extends Component {
    render() {
        const list = this.renderDOM();

        this.props.friends.forEach(friend => {
            const futuramaItem = new FuturamaItem({ friend });
            list.appendChild(futuramaItem.render());
        });

        return list;
    }

    renderTemplate() {
        return /*html*/ `
            <ul class="futurama-list">
            </ul>
        `;
    }
}



export default FuturamaList;