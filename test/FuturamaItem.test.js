import FuturamaItem from '../src/components/FuturamaItem.js';

const test = QUnit.test;

QUnit.module('Futurama Item');

test('renders template from data', assert => {
    const friend = {
        character: 'Bender',
        quote: 'Yes, I got the most! I win X-Mas!',
        image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
    };

    const futuramaItem = new FuturamaItem({ friend });
    const rendered = futuramaItem.renderTemplate();
    
    assert.htmlEqual(rendered, /*html*/`
        <li class="futurama-item">
            <h2>Bender</h2>
            <img src="https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png" alt="Bender">
            <blockquote>"Yes, I got the most! I win X-Mas!"</blockquote>
        </li>
    `);
});
