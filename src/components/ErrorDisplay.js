import Component from './Component.js';

class ErrorDisplay extends Component {
    renderTemplate() {
        const error = this.props.error;
        if(!error) {
            return '<div></div>';
        }
 
        return /*html*/`
            <p class="error-display">
                ${error}
            </p>
        `;
    }
}

export default ErrorDisplay;
